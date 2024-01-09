import React, { useEffect, useState } from 'react'
import axios from "axios";


function UploadUrl() {

const upload = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/articles/upload",
      {
        //url: editableUrl 
        "url": editableUrl,
         //data: { "url":editableUrl.url} 
      }
    );
    console.log("cc");
    
  } catch (error) {
    console.error("Error apload :", error);
  }
};

const [editableUrl, setEditableUrl] = useState('');


const handleupload = () => {
  upload();
};



    return (
        <div className="max-w  bg-white p-8 rounded-2xl shadow-md mt-[84px] mx-[40px]">
          <h2 className="text-2xl font-semibold mb-6">URL Submission Form</h2>
    
          <form className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="url" className="block text-gray-700 text-sm font-medium mb-2">
                PDF URL:
              </label>
              <input
                type="text"
                id="url"
                name="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#1B9DF0]"
                value={editableUrl}
                onChange={(e) => setEditableUrl(e.target.value)}
                placeholder="Enter your URL"
              />
            </div>
    
        <div className="flex justify-end items-center">
          <button
            type="button"
            className="bg-[#1B9DF0] text-white px-4 py-2 rounded-2xl hover:bg-[#1B9DF0] focus:outline-none focus:shadow-outline-blue"
            onClick={handleupload}>
                Upload
              </button>
            </div>
          </form>
        </div>
      );
}

export default UploadUrl