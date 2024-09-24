import React, { useState } from 'react';

const Product = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value > 0 ? value : 1);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div>
            <h2>{product.title}</h2>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
            />
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;