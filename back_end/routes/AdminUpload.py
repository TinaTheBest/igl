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
        headers = {'x-api-key': 'sec_eyOdbbZdJpBcMQWkHY3utIHPQl9Wkc4x', 'Content-Type': 'application/json'}
        response_add_url = requests.post(add_url_endpoint, headers=headers, json=add_url_payload)
        
        text = text.replace("\n", " ")
        art = {
                "full_text": text,
                "pdf_url": pdf_url,
              }


        if response_add_url.status_code == 200:
            source_id = response_add_url.json().get('sourceId')
            logger.info(f'Successfully added PDF. Source ID: {source_id}')

            # Send user messages to extract information
            chat_endpoint = 'https://api.chatpdf.com/v1/chats/message'
            user_messages_payload = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': ' Extract the title of the article and provide it without additional details or introductory phrases and withou " ".'},
                ]
            }
            user_messages_payload1 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'Extract and list the authors of the article, separating their names with commas. Provide the response without additional details or introductory phrases.'},
                ]
            }
            user_messages_payload2 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'Extract and list the institutions mentioned in the article, separating them with commas. Provide the response without additional details or introductory phrases.'},
                ]
            }
            user_messages_payload3 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'extract the content of the title "keywords" you find it in uppercase or lowercase. Generate a specific response with commas between keywords, excluding meta information, Provide response without introductory phrases or additional details. '},
                ]
            }
            user_messages_payload4 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'Retrieve the existing abstract from the article, refrain from generating content. Present the extracted abstract without any additional meta information. Provide response without introductory phrases or extra details, ensuring the abstract is directly presented as found in the article.'},
                ]
            }
            user_messages_payload5 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'Capture the content under the heading "References" in either uppercase or lowercase, generate a specific response with commas separating the references. Exclude purely numerical references. Provide responses without introductory phrases, stating the references directly without additional context. '},
                ]
            }
            user_messages_payload6 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'Locate or approximate the publication date of the article, and generate a specific response with only the date in the format year-month-day. you must Provide responses without introductory phrases directly presenting the publication date with only the date in the format year-month-day. '},
                ]
            }

            response_chat = requests.post(chat_endpoint, headers=headers, json=user_messages_payload)
            response_chat1 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload1)
            response_chat2 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload2)
            response_chat3 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload3)
            response_chat4 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload4)
            response_chat5 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload5)
            response_chat6 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload6)

          

            if response_chat.status_code == 200  :
                result_content = response_chat.json().get('content')
            else:
                logger.error(f'Error sending message. Status: {response_chat.status_code}, Error: {response_chat.text}')
                return jsonify({"error": "Failed to send message to external service"}), 500

            if  response_chat1.status_code == 200  :
                result_content1 = response_chat1.json().get('content')
            else:
                logger.error(f'Error sending message. Status: {response_chat1.status_code}, Error: {response_chat1.text}')
                return jsonify({"error": "Failed to send message to external service"}), 500
            
            if  response_chat2.status_code == 200  :
                result_content2 = response_chat2.json().get('content')
            else:
                logger.error(f'Error sending message. Status: {response_chat2.status_code}, Error: {response_chat2.text}')
                return jsonify({"error": "Failed to send message to external service"}), 500

            if  response_chat3.status_code == 200  :
                result_content3 = response_chat3.json().get('content')
            else:
                logger.error(f'Error sending message. Status: {response_chat3.status_code}, Error: {response_chat3.text}')
                return jsonify({"error": "Failed to send message to external service"}), 500

            if response_chat4.status_code == 200  :
                result_content4 = response_chat4.json().get('content')
            else:
                logger.error(f'Error sending message. Status: {response_chat4.status_code}, Error: {response_chat4.text}')
                return jsonify({"error": "Failed to send message to external service"}), 500
            
            if response_chat5.status_code == 200  :
                result_content5 = response_chat5.json().get('content')
            else:
                logger.error(f'Error sending message. Status: {response_chat5.status_code}, Error: {response_chat5.text}')
                return jsonify({"error": "Failed to send message to external service"}), 500

            if response_chat6.status_code == 200  :
                result_content6 = response_chat6.json().get('content')
            else:
                logger.error(f'Error sending message. Status: {response_chat6.status_code}, Error: {response_chat6.text}')
                return jsonify({"error": "Failed to send message to external service"}), 500


            # Create Elasticsearch connection
            es = Elasticsearch(['http://elasticsearch:9200'])
            index_name = 'article_non_valide'

            document={
                "title":result_content,
                "authors":result_content1,
                "institutions":result_content2,
                "keywords":result_content3,
                "abstract":result_content4,
                "references":result_content5,
                "publication_date":result_content6,
                "full_text": text,
                "pdf_url": pdf_url,
            }
            document_id += 1
            # Store extracted information in Elasticsearch
            es.index(index=index_name, body=document)
            
            return jsonify({"message": "Document upload successful"}), 201
        else:
            logger.error(f'Failed to add PDF via URL. Status: {response_add_url.status_code}, Error: {response_add_url.text}')
            return jsonify({"error": "Failed to add PDF via URL"}), 500

    except Exception as e:
        logger.error(f"An unexpected error occurred: {str(e)}")
        return jsonify({"error": "Internal Server Error"}), 500
