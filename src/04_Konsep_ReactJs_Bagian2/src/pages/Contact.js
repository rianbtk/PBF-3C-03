import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return (
            <div>
               
                <section class="tm-welcome-section">
                <div class="container tm-position-relative">
                    <div class="tm-lights-container">
                    <img src="assets/img/light.png" alt="Light" class="light light-1"/>
                    <img src="assets/img/light.png" alt="Light" class="light light-2"/>
                    <img src="assets/img/light.png" alt="Light" class="light light-3"/>  
                    </div>        
                    <div class="row tm-welcome-content">
                    <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="assets/img/header-line.png" alt="Line" class="tm-header-line"/>&nbsp;Contact Us&nbsp;&nbsp;<img src="assets/img/header-line.png" alt="Line" class="tm-header-line"/></h2>
                    <h2 class="gold-text tm-welcome-header-2">Cafe House</h2>
                    <p class="gray-text tm-welcome-description">Cafe House is free <span class="gold-text">responsive Bootstrap</span> v3.3.5 layout by <span class="gold-text">templatemo</span>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                    <a href="#main" class="tm-more-button tm-more-button-welcome">Message Us</a>      
                    </div>
                    <img src="assets/img/table-set.png" alt="Table Set" class="tm-table-set img-responsive"/>            
                </div>      
                </section>
                <div class="tm-main-section light-gray-bg">
                <div class="container" id="main">
                    <section class="tm-section row">
                    <h2 class="col-lg-12 margin-bottom-30">Send us a message</h2>
                    <form action="#" method="post" class="tm-contact-form">
                        <div class="col-lg-6 col-md-6">
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
                            <textarea id="contact_message" class="form-control" rows="6" placeholder="MESSAGE"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="tm-more-button" type="submit" name="submit">Send message</button> 
                        </div>               
                        </div>
                        <div class="col-lg-6 col-md-6">
                        <div id="google-map"></div>
                        </div> 
                    </form>
                    </section>
                </div>
                </div>  
            
            <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>      
            <script type="text/javascript" src="js/templatemo-script.js"></script>      
            
            {/* <script>
                
                var map = '';
                var center;

                function initialize() {
                    var mapOptions = {
                    zoom: 16,
                    center: new google.maps.LatLng(13.758468,100.567481),
                    scrollwheel: false
                    };
                    
                    map = new google.maps.Map(document.getElementById('google-map'),  mapOptions);

                    google.maps.event.addDomListener(map, 'idle', function() {
                    calculateCenter();
                    });
                    
                    google.maps.event.addDomListener(window, 'resize', function() {
                    map.setCenter(center);
                    });
                }

                function calculateCenter() {
                    center = map.getCenter();
                }

                function loadGoogleMap(){
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
                    document.body.appendChild(script);
                }
                $(document).ready(function(){                
                    loadGoogleMap();                
                });
                </script> */}
                
            </div>
        );
    }
}

export default Contact;