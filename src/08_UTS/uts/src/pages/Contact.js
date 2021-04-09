import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Contact extends React.Component {

    state = {
        latitude : true,
        longtitude : null
    };
    async componentDidMount (){
        const url ="https://api.wheretheiss.at/v1/satellites/25544";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
             latitude : false
            });
    }
    render() {
        return (
            <div class="templatemo-container">
                <div class="header-img-2">
                </div>
                <div class="welcome-container">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="welcome-wrapper">
                                    <h2 class="welcome-title text-uppercase">In Touch</h2>
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
                                <h2 class="section-title">Contact</h2>
                                <div class="section-title-underline-blue"></div>
                                <hr class="section-title-underline" />
                                <p class="small">Proin Gravidani</p>
                            </div>
                        </div>
                        <div class="row margin-bottom-30">
                            <div class="col-lg-6 col-md-6 contact-left">
                                <h3 class="section-title-2 text-uppercase font-weight-300"><b>Our</b> <span class="blue-text">Information</span></h3>
                                <p class="margin-bottom-30">Proin gravida arcu malesuada, venenatis nisl vitae, egestas sem. Vestibulum mauris magna, aliquam non commodo ac, porttitor a augue.</p>
                                <div class="contact-point">
                                    <i class="fa fa-map-marker fa-3x contact-point-icon blue-text"></i>
                                    <div class="contact-point-detail-container">
                                        <b class="text-uppercase contact-point-title blue-text font-weight-700">Address</b>
                                        <p class="contact-point-detail">No. 1234, Rama IX Road, Bangkok 12345, Thailand.</p>
                                    </div>
                                </div>
                                <div class="contact-point">
                                    <i class="fa fa-envelope-o fa-3x contact-point-icon blue-text"></i>
                                    <div class="contact-point-detail-container">
                                        <b class="text-uppercase contact-point-title blue-text font-weight-700">Email</b>
                                        <p class="contact-point-detail">mail@company.com</p>
                                    </div>
                                </div>
                                <div class="contact-point">
                                    <i class="fa fa-phone fa-3x contact-point-icon blue-text"></i>
                                    <div class="contact-point-detail-container">
                                        <b class="text-uppercase contact-point-title blue-text font-weight-700">Phone</b>
                                        <p class="contact-point-detail">+(123) 456 7890</p>
                                    </div>
                                </div>
                                {this.state.latitude || this.state.longtitude  || !this.state.longtitude ? (
                                                                    <div class="contact-point">
                                                                    {/* <i class="fa fa-phone fa-3x contact-point-icon blue-text"></i> */}
                                                                    <div class="contact-point-detail-container">
                                                                        <b class="text-uppercase contact-point-title blue-text font-weight-700">Data Google Maps</b>
                                                                        <br/>
                                                                        <br/>
                                                                        <br/>
                                                                        <br/>
                                                                        <Link to="/api"><button class="text-uppercase contact-point-title blue-text font-weight-700"> Edit Data </button></Link>
                                                                        
                                                                        {/* <p class="latlong"><span id="long">longtitude</span></p> */}
                                                                    </div>
                                                                </div>
                                        ) : (
                                            <div>
                                                <div> {this.state.longtitude.velocity} </div>
                                                <div> {this.state.longtitude.longitude}</div>
                                                <div> {this.state.longtitude.id}</div>
                                            </div>
                                        )}
                            </div>
                            <div class="col-lg-6 col-md-6 contact-right">
                                <h3 class="section-title-2 text-uppercase font-weight-300"><b>Leave</b> <span class="blue-text">a message</span></h3>
                                <form action="#" method="post" class="tm-contact-form">
                                    <div class="tm-contact-form">
                                        <div class="form-group">
                                            <input type="text" id="contact_name" class="form-control" placeholder="NAME" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" id="contact_email" class="form-control" placeholder="EMAIL" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="contact_subject" class="form-control" placeholder="SUBJECT" />
                                        </div>
                                        <div class="form-group">
                                            <textarea id="contact_message" class="form-control" rows="8" placeholder="MESSAGE"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" name="submit" class="text-uppercase btn-blue-gradient btn-submit">send message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="google-map-container">
                                    <div id="google-map" class="google-map"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="blue-divider effect1">
                    <div class="dark-blue-bg"></div>
                    <div class="blue-divider-bg-graphic"></div>
                    <div class="blue-bg"></div>
                </div>
                <script type="text/javascript" src="assets/js/jquery-1.11.2.min.js"></script>
                <script type="text/javascript" src="assets/js/templatemo-script.js"></script>

            </div>
        );
    }
}
export default Contact;