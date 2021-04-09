import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Profile extends React.Component {
    render() {
        return (
            <div class="templatemo-container">
                <div class="header-img-3"></div>
                <div class="welcome-container">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="welcome-wrapper">
                                    <h2 class="welcome-title text-uppercase">Work</h2>
                                    <img src="assets/img/welcome-divider-lines.png" alt="Welcome divider" class="welcome-divider-lines-img" />
                                    <p class="welcome-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lectus augue, non rhoncus erat accumsan eu. Sed dictum sem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="templatemo-container">
                    <div class="container">
                        <div class="row margin-bottom-30">
                            <div class="col-lg-12 text-uppercase text-center">
                                <h2 class="section-title">Profile</h2>
                                <div class="section-title-underline-blue"></div>
                                <hr class="section-title-underline" />
                                <p class="small">Proin Gravidani</p>
                            </div>
                        </div>
                        <div class="row margin-bottom-30">
                            <div class="col-lg-12">
                                <ul id="filters" class="folio-filters">
                                    <li class="current"><Link to="#" data-filter="*">All</Link></li>
                                    <li class=""><Link to="#" data-filter=".design">Design</Link></li>
                                    <li class=""><Link to="#" data-filter=".web">Web</Link></li>
                                    <li class=""><Link to="#" data-filter=".branding">Branding</Link></li>
                                    <li class=""><Link to="#" data-filter=".print">Print</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div id="folio-container" class="row">
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item design">
                                <img src="assets/img/18.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item design">
                                <img src="assets/img/19.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item design">
                                <img src="assets/img/20.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item design">
                                <img src="assets/img/21.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item web">
                                <img src="assets/img/22.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item web">
                                <img src="assets/img/23.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item web">
                                <img src="assets/img/24.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item branding">
                                <img src="assets/img/25.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item branding">
                                <img src="assets/img/26.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item branding">
                                <img src="assets/img/27.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item print">
                                <img src="assets/img/28.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 margin-bottom-30 folio-item print">
                                <img src="assets/img/29.jpg" alt="Image" class="img-thumbnail" />
                            </div>
                        </div>
                    </div>
                </section>
                <div class="blue-divider effect1">
                    <div class="dark-blue-bg"></div>
                    <div class="blue-divider-bg-graphic"></div>
                    <div class="blue-bg"></div>
                </div>
            </div>
        );
    }
}

export default Profile;