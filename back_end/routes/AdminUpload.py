from flask import Blueprint, jsonify, request
from io import BytesIO
import json
import requests
import re
#from pdfminer.high_level import extract_text
from elasticsearch import Elasticsearch
import fitz  # PyMuPDF
import logging

admin_bp = Blueprint('articles', __name__)
logger = logging.getLogger(__name__)

document_id = None  # Initialize document_id to None

@admin_bp.before_request
def initialize_document_id():
    global document_id
    if document_id is None:
        document_id = 1  # Set the initial value for document_id


@admin_bp.route('/upload', methods=['POST'])
def extract_article_information():
    try:
        data_from_request = request.json
        pdf_url = data_from_request.get('url')
        #document_id = request.args.get('document_id')
        global document_id; 

        # Extract full text from PDF
        try:
            response = requests.get(pdf_url, stream=True)
            response.raise_for_status()
            with fitz.open("pdf", response.content) as pdf_document:
                text = " ".join(page.get_text() for page in pdf_document)
        except Exception as e:
            logger.error(f"Error extracting text from PDF: {str(e)}")
            return jsonify({"error": "Failed to extract text from PDF"}), 500

        # Add PDF via URL to external service
        add_url_endpoint = 'https://api.chatpdf.com/v1/sources/add-url'
        add_url_payload = {"url": pdf_url}
        headers = {'x-api-key': 'sec_BLQNaXe3CClcBiztl4hROyliTYoV3BVt', 'Content-Type': 'application/json'}
        response_add_url = requests.post(add_url_endpoint, headers=headers, json=add_url_payload)

        if response_add_url.status_code == 200:
            source_id = response_add_url.json().get('sourceId')
            logger.info(f'Successfully added PDF. Source ID: {source_id}')

            # Send user messages to extract information
            chat_endpoint = 'https://api.chatpdf.com/v1/chats/message'
            user_messages_payload = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'The pdf is a scientific article, Extract the title,authors(just names),institutions,keywords, abstract,references and publication date found in the article and generate a response in json form, for the keywords you must find a title "keywords" miniscule or uppercase or both  if not found do not extract them and let the response empty("keywords":"") and for the abstract extract him as it is mentionned in the article (all the paragraph) and do not generate it by your self and for references you probablly find a title "references" miniscule or uppercase  in the article extract from there the references.knowing that each information requested has its own title in the generated response("title","authors","institutions","keywords","abstract","references","publication_date")'},
                ]
            }

            response_chat = requests.post(chat_endpoint, headers=headers, json=user_messages_payload)
            text = text.replace("\n", " ")
            art = {
                    "full_text": text,
                    "pdf_url": pdf_url,
                  }


            if response_chat.status_code == 200:
                result_content = response_chat.json().get('content')
            else:
                logger.error(f'Error sending message. Status: {response_chat.status_code}, Error: {response_chat.text}')
                return jsonify({"error": "Failed to send message to external service"}), 500

            # Create Elasticsearch connection
            es = Elasticsearch(['http://elasticsearch:9200'])
            index_name = 'article_non_valide'

            document={
                "result_content":result_content,
                "art":art,
            }
            document_id += 1
            # Store extracted information in Elasticsearch
            es.index(index=index_name, id=document_id, body=document)
            
            return jsonify({"message": "Document upload successful"}), 201
        else:
            logger.error(f'Failed to add PDF via URL. Status: {response_add_url.status_code}, Error: {response_add_url.text}')
            return jsonify({"error": "Failed to add PDF via URL"}), 500

    except Exception as e:
        logger.error(f"An unexpected error occurred: {str(e)}")
        return jsonify({"error": "Internal Server Error"}), 500