import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

export class Navbar extends Component {
  state = {
    activeKey: 'home' 
  };

  handleSelect = (selectedKey) => {
    this.setState({ activeKey: selectedKey });
  };

  render() {
    const { activeKey } = this.state;

    return (
      <nav className="bg-primary p-3 fs-5">
        <div className="w-75 mx-auto">
          <Nav
            className="nav-underline gap-4"
            activeKey={activeKey}
            onSelect={this.handleSelect} 
          >
            <Nav.Item>
              <Nav.Link
                eventKey="home" 
                style={{ color: '#fff' }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link1"
                style={{ color: '#fff' }}
              >
                Business
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link2"
                style={{ color: '#fff' }}
              >
                Entertainment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link3"
                style={{ color: '#fff' }}
              >
                General
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link3"
                style={{ color: '#fff' }}
              >
                Health
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link3"
                style={{ color: '#fff' }}
              >
                Science
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link3"
                style={{ color: '#fff' }}
              >
                Sports
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link3"
                style={{ color: '#fff' }}
              >
                Technology
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </nav>
    );
  }
}

export default Navbar;
