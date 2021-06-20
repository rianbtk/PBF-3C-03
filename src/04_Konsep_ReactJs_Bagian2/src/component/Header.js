import React, { component } from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="tm-top-header">
                <div class="container">
                    <div class="row">
                    <div class="tm-top-header-inner">
                        <div class="tm-logo-container">
                        <img src="assets/img/logo.png" alt="Logo" class="tm-site-logo"/>
                        <h1 class="tm-site-name tm-handwriting-font">Cafe House</h1>
                        </div>
                        <div class="mobile-menu-icon">
                        <i class="fa fa-bars"></i>
                        </div>
                        <nav class="tm-nav">
                        <ul>
                            <li><Link to="/" class="interactive">Home</Link></li>
                            <li><Link to="/TodaySpecial" >Today Special</Link></li>
                            <li><Link to="/Menu" >Menu</Link></li>
                            <li><Link to="/Contact" >Contact</Link></li>
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