import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Category from './components/Category';
import Modal from './components/modal/ProductModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.getCartFromLocalStorage() || [],
      searchQuery: '',
      isModalOpen: false,
      modalProduct: null,
      loading: false,
    };
  }

  getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };

  saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  addToCart = (product, quantity = 1) => {
    this.setState((prevState) => {
      const existingProduct = prevState.cart.find(item => item.id === product.id);
      let updatedCart;
      if (existingProduct) {
        updatedCart = prevState.cart.map(item =>
          item.id === product.id
            ? { ...existingProduct, quantity: existingProduct.quantity + quantity }
            : item
        );
      } else {
        updatedCart = [...prevState.cart, { ...product, quantity }];
      }
      this.saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart, isModalOpen: true, modalProduct: product };
    });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, modalProduct: null });
  };

  render() {
    return (
      <Router>
        <Navbar onSearch={this.handleSearch} />
        <ToastContainer />
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
          product={this.state.modalProduct}
        />
        <Routes>
          <Route
            path="/"
            element={<Hero addToCart={this.addToCart} searchQuery={this.state.searchQuery} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={this.state.cart} />}
          />
          <Route
            path="/category/:category"
            element={<Category addToCart={this.addToCart} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;