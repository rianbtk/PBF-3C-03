import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../slider/14.jpg';
import image2 from '../slider/15.jpg';
import image3 from '../slider/16.jpg';
import image4 from '../slider/17.jpg';

class Lainya extends React.Component {
    render() {
        return (
            <div>
                <div class="img-055"></div>
                {/* <!-- end header image -->
        <!-- Welcome message --> */}
                <div class="welcome-container">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="welcome-wrapper">
                                    <h2 class="welcome-title text-uppercase">POLINEMA MALANG</h2>
                                    <img src="assets/img/welcome-divider-lines.png" alt="Welcome divider" class="welcome-divider-lines-img" />
                                    <p class="welcome-description">Adalah salah satu perguruan teknik negeri yang berkopeten dalam pengembangan ilmu teknologi berbasis teknik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Welcome message -->
        <!-- main content --> */}
                <section class="templatemo-container">
                    <div class="container">
                        <div class="row margin-bottom-30">
                            <div class="col-lg-12 text-uppercase text-center">
                                <h2 class="section-title">Ulasan Tugas</h2>
                                <div class="section-title-underline-blue"></div>
                                <hr class="section-title-underline" />
                                <p class="small">Nama : Agus Salim Hadjrianto</p>
                                <p class="small">Nim  : 1941723007</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="recent-post-container">
                                    <h3 class="text-uppercase recent-post-title margin-bottom-30"><span class="font-weight-700">Aenean</span> <span class="font-weight-300 blue-text">Sollicitum</span></h3>
                                    <AliceCarousel autoPlay autoPlayInterval="3000">
                                        <img src={image1} className="sliderimg" />
                                        <img src={image2} className="sliderimg" />
                                        <img src={image3} className="sliderimg" />
                                        <img src={image4} className="sliderimg" />
                                    </AliceCarousel>
                                    <p class="justify-text"><span class="red-text">Aenean sollicitudin</span>, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="recent-post-container">
                                    <h3 class="text-uppercase recent-post-title margin-bottom-30"><span class="font-weight-700">Aenean</span> <span class="font-weight-300 blue-text">Sollicitum</span></h3>
                                    <AliceCarousel autoPlay autoPlayInterval="3000">
                                        <img src={image1} className="sliderimg" />
                                        <img src={image2} className="sliderimg" />
                                        <img src={image3} className="sliderimg" />
                                        <img src={image4} className="sliderimg" />
                                    </AliceCarousel>
                                    <p class="justify-text"><span class="red-text">Aenean sollicitudin</span>, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                                    <Link to="/search">Lainya</Link>
                                    </p>
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
            </div>
        );

    }
}


export default Lainya;