import React from 'react';
import './ProductModal.css';

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button onClick={onClose} className="btn btn-secondary">Close</button>
      </div>
    </div>
  );
};

export default Modal;