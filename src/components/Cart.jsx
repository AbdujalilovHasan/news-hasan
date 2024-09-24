import React from 'react';
import { Table } from 'react-bootstrap';

const Cart = ({ cart }) => {
    return (
        <div className="container mt-5">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default Cart;