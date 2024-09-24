import React from 'react';
import { Modal } from 'react-bootstrap';

const ProductModal = ({ isOpen, onClose, product }) => {
    if (!product) return null;

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{product.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={onClose}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;