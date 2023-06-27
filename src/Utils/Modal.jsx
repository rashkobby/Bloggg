import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  },
  content: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
  },
};

const CustomModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Delete Confirmation"
    >
      <div className="block rounded-lg mt-8 flex flex-col w-full justify-center items-center bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <h2 className="text-xl font-bold mb-4">Proceed to delete</h2>
            <p className="mb-4 text-center">Are you sure you want to delete this blog?</p>
            <div className='lg:flex flex flex-wrap justify-center items-center'>
                <button onClick={onDelete}
                    type="button"
                    className=" px-4 py-2 mr-2 bg-neutral-700 hover:bg-neutral-500 text-neutral-200 rounded"
                    >
                    Delete
                </button>
                <button className=" px-4 py-2 bg-neutral-200 hover:bg-neutral-500 text-neutral-800 rounded" onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    </Modal>
  );
};

export default CustomModal;