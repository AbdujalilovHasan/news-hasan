import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Category = ({ addToCart }) => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching category products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleAddToCart = (product) => {
        addToCart({ ...product, quantity: 1 });
        toast.success(`${product.title} added to cart!`);
    };

    return (
        <div className="container mt-5">
            <h1>{category.replace(/-/g, ' ')}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="row">
                        {currentProducts.map(product => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <Card>
                                    <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>${product.price}</Card.Text>
                                        <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="btn btn-secondary mx-2"
                        >
                            Previous
                        </button>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="btn btn-secondary mx-2"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Category;