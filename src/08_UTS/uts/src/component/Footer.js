import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <section class="templatemo-container blue-bg footer-nav effect1">
                    <div class="container">
                        <div class="col-lg-2 col-md-2 col-sm-6 footer-block">
                            <h3 class="text-uppercase">Main menu</h3>
                            <nav class="text-uppercase templatemo-nav-2">
                                <ul>
                                    <li><Link to="/">home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 footer-block">
                            <h3 class="text-uppercase">About us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada lacus vel tristique rhoncus. Vivamus vel molestie odio. Curabitur pulvinar, diam at pharetra euismod, augue felis pretium est, sit amet accumsan dui enim nec tortor. Cras lobortis feugiat enim. Aliquam rhoncus pharetra ligula accumsan sodales. Donec blandit sed justo quis sollicitudin. Nulla et leo id purus suscipit rhoncus ut at purus. Suspendisse molestie sodales porttitor.

                        Vivamus et vulputate augue. Etiam et eleifend purus, in sagittis nisi. Vivamus laoreet metus ut nisl euismod molestie. In non lacus placerat ipsum placerat dapibus eu vel arcu.</p>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 footer-block">
                            <h3 class="text-uppercase">Resources</h3>
                            <ul>
                                <li><Link to="#">Aenean leogula</Link></li>
                                <li><Link to="#">Porttitor euconsequat</Link></li>
                                <li><Link to="#">Vitae eleifend ac enim</Link></li>
                                <li><Link to="#">Aliquam lorante</Link></li>
                                <li><Link to="#">Phasellus viverra nulla</Link></li>
                                <li><Link to="#">Dmetus varius</Link></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 footer-block">
                            <h3 class="text-uppercase">Features</h3>
                            <ul>
                                <li><Link to="#">lorem quis bibendum</Link></li>
                                <li><Link to="#">Auctor nisi elit conser</Link></li>
                                <li><Link to="#">at ipsum, nec sagittis</Link></li>
                                <li><Link to="#">Duis sed odio sit amet</Link></li>
                                <li><Link to="#">Fnibh vulpu</Link></li>
                                <li><Link to="#">ftate cursus a sit amet</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <footer class="text-center">
                    <p class="small copyright-text">Copyright &copy; 2084 Company Name</p>
                </footer>
            </div>
        )
    }
}

export default Footer;