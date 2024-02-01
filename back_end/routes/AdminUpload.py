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
                    {'role': 'user', 'content': 'Extract the title of the article and generate a string response in " ", generate just the specific response without meta informations because i will store it in a json variable, Provide responses without preamble '},
                ]
            }
            user_messages_payload1 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'Extract the authors of the article just their names and generate a string response in " " with "," between authors, generate just the specific response without meta informations because i will store it in a json variable, Provide responses without preamble '},
                ]
            }
            user_messages_payload2 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'extract the institutions of the article, generate a string response in " " with "," between institutions, generate just the specific response because i will store it in a json variable, Provide responses without preamble '},
                ]
            }
            user_messages_payload3 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'extract the content of the title "keywords" you find it in uppercase or lowercase, generate a string response in " " with "," between keywords, generate just the specific response without meta informations because i will store it in a json variable, Provide responses without preamble '},
                ]
            }
            user_messages_payload4 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'Extract the abstract found in the article, and do not generate it by your self, generate a string response in " " without any meta informations, Provide responses without preamble'},
                ]
            }
            user_messages_payload5 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'extract the content of the title "references" you find it in uppercase or lowercase, generate a string response in " " with "," between references, generate just the specific response because i will store it in a json variable and don not extract just numbers,Provide responses without preamble '},
                ]
            }
            user_messages_payload6 = {
                'sourceId': source_id,
                'messages': [
                    {'role': 'user', 'content': 'Find or estimate the publication date of the article, generate a string response in " ",generate just the specific response just the date without meta informations because i will store it in a json variable, Provide responses without preamble'},
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
            index_name = 'article_valide'

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