from flask import Blueprint, jsonify

admin_bp = Blueprint('articles', __name__)

# from io import BytesIO
# import json
# import requests

# import re
# from pdfminer.high_level import extract_text
# from elasticsearch import Elasticsearch

# @admin_bp.route('/<pdf_url>/<document_id>')
# def extract_article_information(pdf_url,document_id):
 
#  #extraire le texte integral
#  response = requests.get(pdf_url, stream=True)
#  response.raise_for_status()
#  text=extract_text(BytesIO(response.content))

#   # Step 1: Add PDF via URL
#  add_url_endpoint = 'https://api.chatpdf.com/v1/sources/add-url'
#  add_url_payload = {"url": pdf_url}

#  headers = {'x-api-key': 'sec_BLQNaXe3CClcBiztl4hROyliTYoV3BVt', 'Content-Type': 'application/json'}

#  response_add_url = requests.post(add_url_endpoint, headers=headers, json=add_url_payload)

#  if response_add_url.status_code == 200:
#     source_id = response_add_url.json()['sourceId']
#     print(f'Successfully added PDF. Source ID: {source_id}')

#     # Step 2: Send user messages to extract information
#     chat_endpoint = 'https://api.chatpdf.com/v1/chats/message'
#     user_messages_payload = {
#         'sourceId': source_id,
#         'messages': [
#             {'role': 'user', 'content': 'Extract the title of the article and generate a response in JSON form'},
#         ]
#     }
#     user_messages_payload1 = {
#         'sourceId': source_id,
#         'messages': [
#             {'role': 'user', 'content': 'Extract the authors of the article in JSON format and if you do not find the answer let it empty'},
#         ]
#     }
#     user_messages_payload2 = {
#         'sourceId': source_id,
#         'messages': [
#             {'role': 'user', 'content': 'Extract the institutions of the article and generate a response in JSON format and if you do not find the answer let it empty'},
#         ]
#     }
#     user_messages_payload3 = {
#         'sourceId': source_id,
#         'messages': [
#             {'role': 'user', 'content': 'Extract the keywords of the article and generate a response in JSON form and if you do not find the answer let it empty'},
#         ]
#     }
#     user_messages_payload4 = {
#         'sourceId': source_id,
#         'messages': [
#             {'role': 'user', 'content': 'Extract the abstract of the article and generate a response in JSON format and if you do not find the answer let it empty'},
#         ]
#     }
#     #user_messages_payload5 = {
#     #   'sourceId': source_id,
#     #   'messages': [
#     #       {'role': 'user', 'content': 'Extract all the text of the article without the complex elements like images,tables,... just the text(all sections)'},
#     #   ]
#     #}
#     user_messages_payload6 = {
#         'sourceId': source_id,
#         'messages': [
#             {'role': 'user', 'content': 'Extract the references of the article in JSON format and if you do not find the answer let it empty '},
#         ]
#     }
#     user_messages_payload7 = {
#         'sourceId': source_id,
#         'messages': [
#             {'role': 'user', 'content': 'extract the publication date of the article and if you can not find it, try to deduce the year just give the specific response in JSON format and if you do not find the answer let it empty'},
#         ]
#     }

#     response_chat = requests.post(chat_endpoint, headers=headers, json=user_messages_payload)
#     response_chat1 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload1)
#     response_chat2 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload2)
#     response_chat3 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload3)
#     response_chat4 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload4)
#     #response_chat5 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload5)
#     response_chat6 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload6)
#     response_chat7 = requests.post(chat_endpoint, headers=headers, json=user_messages_payload7)



#     # Create Elasticsearch connection
#     es = Elasticsearch(['http://localhost:9200'])  # Replace with your Elasticsearch server details

#     # Define Elasticsearch index
#     index_name = 'article_non_valide'

#     # Store extracted information in Elasticsearch
#     document = {
#         #'source_id': source_id,
#          response_chat.json()['content'],
#          response_chat1.json()['content'],
#          response_chat2.json()['content'],
#          response_chat3.json()['content'],
#          response_chat4.json()['content'],
#          response_chat6.json()['content'],
#          response_chat7.json()['content'],
        
#     }
#     es.index(index=index_name,id=document_id, body=document)

    
# # Example usage:
# #pdf_url = "https://arxiv.org/pdf/1102.4106.pdf"
# #extract_article_information(pdf_url)

