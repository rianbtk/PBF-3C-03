import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="header-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-sm-4 site-name-container">
                                <img src="assets/img/logo.png" alt="Site logo" class="site-logo" />
                                <h1 class="site-name">PBF</h1>
                            </div>
                            <div class="mobile-menu-icon">
                                <i class="fa fa-bars"></i>
                            </div>
                            <div class="col-lg-9 col-md-8 col-sm-8 templatemo-nav-container">
                                <nav class="templatemo-nav">
                                    <ul>
                                        <li><Link to="/" class="interactive">Home</Link></li>
                                        <li><Link to="/about" >About</Link></li>
                                        <li><Link to="/profile">Profile</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/lainya">Lainya</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;