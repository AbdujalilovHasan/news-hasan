import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import TeslaNews from './TeslaNews';
// import AppleNews from './AppleNews';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

export class Hero extends Component {
    render() {
        return (
            <div className="w-75 mx-auto">
                <div className="links">
                    <ul className='mt-0'>
                        <div className="categories w-75 mx-auto mt-3 mb-5 nav d-flex justify-content-center gap-5">
                            <li className='nav-item'>
                                <NavLink to="/AppleNews" className='nav-link px-0' activeClassName="active">
                                    Apple News
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/TeslaNews" className='nav-link px-0' activeClassName="active">
                                    Tesla News
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/CountryNews" className='nav-link px-0' activeClassName="active">
                                    Country News
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/SourcesNews" className='nav-link px-0' activeClassName="active">
                                    Sources News
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/DomainsNews" className='nav-link px-0' activeClassName="active">
                                    Domains News
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="search">

                </div>
            </div>
        );
    }
}

export default Hero;
