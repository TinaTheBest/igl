import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Rideau noir semi-transparent */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-50 ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
      ></div>

      {/* Fenêtre modale */}
      <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute bg-white p-8 rounded-[20px] shadow-md">
          <p className="text-lg mb-4">Are you sure you want to delete this moderator?</p>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-[15px] focus:outline-none"
              onClick={() => onConfirm(true)}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-[15px] focus:outline-none"
              onClick={() => onConfirm(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
