import React from 'react'

function UploadUrl() {
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
                placeholder="Enter your URL"
              />
            </div>
    
        <div className="flex justify-end items-center">
          <button
            type="upload"
            className="bg-[#1B9DF0] text-white px-4 py-2 rounded-2xl hover:bg-[#1B9DF0] focus:outline-none focus:shadow-outline-blue"
          >
                Upload
              </button>
            </div>
          </form>
        </div>
      );
}

export default UploadUrl