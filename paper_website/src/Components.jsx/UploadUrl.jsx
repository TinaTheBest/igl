import React, { useState } from "react";
import axios from "axios";
/**
 * Composant de formulaire pour soumettre une URL de fichier PDF.
 * @component
 */

function UploadUrl() {
  const [editableUrl, setEditableUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  /**
   * Effectue la soumission de l'URL au serveur.
   * Affiche une fenêtre modale en cas de succès.
   */
  const upload = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/articles/upload",
        {
          url: editableUrl,
        }
      );
      openModal();
      console.log(response);
      //#region setShowModal(true);
    } catch (error) {
      console.error("Error upload:", error);
    }
  };
  /**
   * Gère le clic sur le bouton "Upload".
   */
  const handleupload = () => {
    upload();
  };
  /**
   * Ferme la fenêtre modale.
   */
  const closeModal = () => {
    setShowModal(false);
  };
  /**
   * Ouvre la fenêtre modale.
   */
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="max-w bg-white p-8 rounded-2xl shadow-md mt-[84px] mx-[40px]">
      <h2 className="text-2xl font-semibold mb-6">URL Submission Form</h2>

      <form className="flex flex-col">
        <div className="mb-4">
          <label
            htmlFor="url"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
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
            onClick={handleupload}
          >
            Upload
          </button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="text-xl font-semibold mb-4">Upload Successful!</p>
            <button
              className="bg-[#1B9DF0] text-white px-4 py-2 rounded-2xl hover:bg-[#1B9DF0] focus:outline-none focus:shadow-outline-blue"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadUrl;
