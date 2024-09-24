import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  state = {
    activeKey: 'home',
    search: '',
  };

  handleSelect = (selectedKey) => {
    this.setState({ activeKey: selectedKey });
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
    this.props.onSearch(e.target.value);
  };

  render() {
    const { activeKey, search } = this.state;

    return (
      <nav className="bg-primary p-3 fs-5">
        <div className="w-75 mx-auto d-flex justify-content-between align-items-center">
          <Nav className="nav-underline gap-4" activeKey={activeKey} onSelect={this.handleSelect}>
            <Nav.Item>
              <NavLink to="/" className="nav-link" style={{ color: '#fff' }}>Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/category/men's clothing" className="nav-link" style={{ color: '#fff' }}>Men's Clothing</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/category/jewelery" className="nav-link" style={{ color: '#fff' }}>Jewelry</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/category/electronics" className="nav-link" style={{ color: '#fff' }}>Electronics</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/category/women's clothing" className="nav-link" style={{ color: '#fff' }}>Women's Clothing</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/cart" className="nav-link" style={{ color: '#fff' }}>Cart</NavLink>
            </Nav.Item>
          </Nav>
          <input
            type="text"
            value={search}
            onChange={this.handleSearchChange}
            placeholder="Search..."
            className="form-control w-25"
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;