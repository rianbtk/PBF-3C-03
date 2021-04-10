# LAPORAN UTS PEMROGRAMAN BERBASIS FRAMEWORK

### Instalasi React 

Caranya dengan 

    <b>npx create-react-app uts_003</b>

### Konversi Template 003_templatemo_457_multi_profile menjadi program di react framework

Code : Public/index.html

            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Multi Profile, free responsive template</title>
                <meta name="description" content="">
                <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet'
                    type='text/css'>
                <link href="assets/css/bootstrap.min.css" rel="stylesheet">
                <link href="assets/css/font-awesome.min.css" rel="stylesheet">
                <link href="assets/css/templatemo-style.css" rel="stylesheet">
            </head>

            <body>
                <!-- <noscript>You need to enable JavaScript to run this app.</noscript> -->
                <div id="root"></div>
                <!-- Home -->
                <!-- JS -->
                <script type="text/javascript" src="assets/js/jquery-1.11.2.min.js"></script> <!-- jQuery -->
                <script type="text/javascript" src="assets/js/responsiveCarousel.min.js"></script> <!-- Carousel -->
                <script type="text/javascript" src="assets/js/templatemo-script.js"></script> <!-- Templatemo Script -->
                <script>

                    $(function () {
                        $('.crsl-items').carousel({
                            visible: 1,
                            itemMinWidth: 320,
                            itemEqualHeight: 320,
                            itemMargin: 9,
                        });
                        $(".crsl-nav a[href=#]").on('click', function (e) {
                            e.preventDefault();
                        });
                    });

                </script>

                <!-- About -->
                <!-- JS -->
                <script type="text/javascript" src="assets/js/jquery-1.11.2.min.js"></script>
                <script type="text/javascript" src="assets/js/templatemo-script.js"></script>

                <!-- Profile -->
                <!-- JS -->
                <script type="text/javascript" src="assets/js/jquery-1.11.2.min.js"></script> <!-- jQuery -->
                <script type="text/javascript" src="assets/js/isotope.pkgd.min.js"></script>
                <!-- Isotope, http://isotope.metafizzy.co -->
                <script type="text/javascript" src="assets/js/templatemo-script.js"></script> <!-- Templatemo Script -->
                <script>
                    // All images are loaded. Call isotope
                    $(window).load(function () {
                        var $container = $('#folio-container');
                        // init
                        $container.isotope({
                            // options
                            itemSelector: '.folio-item',
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false
                            },
                        });

                        // filter items when filter link is clicked
                        jQuery('#filters a').click(function () {
                            var selector = $(this).attr('data-filter');
                            $container.isotope({ filter: selector });
                            return false;
                        });

                        jQuery('#filters li a').click(function () {

                            jQuery('#filters li').removeClass('current');
                            jQuery(this).parent().addClass('current');
                        });
                    });
                </script>

                <!-- Contact -->
                <!-- JS -->
                <script type="text/javascript" src="assets/js/jquery-1.11.2.min.js"></script> <!-- jQuery -->
                <script type="text/javascript" src="assets/js/templatemo-script.js"></script> <!-- Templatemo Script -->
                <script>
                    /* Google map
                    ------------------------------------------------*/
                    var map = '';
                    var center;

                    function initialize() {
                        var mapOptions = {
                            zoom: 16,
                            center: new google.maps.LatLng(-7.1502, 111.8817),
                            scrollwheel: false
                        };

                        map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

                        google.maps.event.addDomListener(map, 'idle', function () {
                            calculateCenter();
                        });

                        google.maps.event.addDomListener(window, 'resize', function () {
                            map.setCenter(center);
                        });
                    }

                    function calculateCenter() {
                        center = map.getCenter();
                    }

                    function loadGoogleMap() {
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
                        document.body.appendChild(script);
                    }
                    $(document).ready(function () {
                        loadGoogleMap();
                    });
                </script>

                <!-- Data Lat Long -->

                <script class="latlong">
                    const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
                    async function getISS() {
                        const response = await fetch(api_url);
                        const data = await response.json();
                        const { latitude, longtitude } = data;

                        document.getElementById('lat').textContent = latitude;
                        document.getElementById('long').textContent = latitude;
                    }

                </script>





            </body>

            </html>


### Langkah pertama membuat router untuk akses ke header footer dan component

1. Code : App.js

        import React from 'react';
        import './App.css';
        import Header from './component/Header';
        import Footer from './component/Footer';
        import Home from './pages/Home';
        import About from './pages/About';
        import Profile from './pages/Profile';
        import Contact from './pages/Contact';
        import Lainya from './pages/Lainya';
        import Api from './pages/Api';
        import Search from './pages/search/apps/components/search';
        import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
        function App() {
        return (
            <Router>

                <Header />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about"  component={About}/>
                    <Route path="/profile"  component={Profile}/>
                    <Route path="/contact"  component={Contact}/>
                    <Route path="/lainya"  component={Lainya}/>
                    <Route path="/api"  component={Api}/>
                    <Route path="/search"  component={Search}/>
                </Switch>
                <Footer/>

            </Router>
        );
        }

        export default App;


2. Code : Index.js

        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './App';
        import reportWebVitals from './reportWebVitals';

        ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
        );

        reportWebVitals();

3. Code : component/Header.js

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

4. Code : component/Footer.js

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

5. Code : pages/Home.js

            import React, { Component } from 'react';
            import { Link } from 'react-router-dom';
            import AliceCarousel from 'react-alice-carousel';
            import "react-alice-carousel/lib/alice-carousel.css";
            import image1 from '../slider/1.jpg';
            import image2 from '../slider/2.jpg';
            import image3 from '../slider/3.jpg';
            class Home extends React.Component {
                render() {
                    return (
                        <div>
                            <div class="header-img"></div>
                            <div class="welcome-container">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="welcome-wrapper">
                                                <h2 class="welcome-title text-uppercase">Welcome</h2>
                                                <img src="assets/img/welcome-divider-lines.png" alt="Welcome divider" class="welcome-divider-lines-img" />
                                                <p class="welcome-description">Multi Profile is free responsive website template for everyone. Feel free to download and use this template for your websites. Thank you for visiting templatemo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Welcome message 
                    main content  */}
                            <section class="templatemo-container section-shadow-bottom">
                                <div class="container">
                                    <div class="row section-title-container">
                                        <div class="col-lg-12 text-uppercase text-center">
                                            <h2 class="section-title">Slider</h2>
                                            <div class="section-title-underline-blue"></div>
                                            <hr class="section-title-underline" />
                                            <p class="small">Lorem ip sums</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <h3 class="section-title-2 text-uppercase font-weight-300"><b>Morbi</b> <span class="blue-text">Accumsan</span></h3>
                                            <p>Credit goes to <Link to="http://unsplash.com">Unsplash</Link> for images used in this template. Morbi dapibus rhoncus nulla ac tempus. Integer felis lorem, fermentum quis nisl accumsan, gravida gravida est. Cras ultrices rhoncus dui ut laoreet. Fusce tincidunt, urna a imperdiet tempor, orci dolor dictum elit, sit amet malesuada mauris magna eget dolor. Morbi ornare convallis vulputate. Donec ut suscipit nisl, ac elementum nisi.</p>
                                            <ul class="gray-text ul-1">
                                                <li>Sed non mauris vitae erat consequat auctor</li>
                                                <li>Class aptent taciti sociosqu</li>
                                                <li>Wonubia nostra, per inceptos himeos</li>
                                            </ul>
                                            <Link to="#" class="btn-blue-gradient">Prima Liuam</Link>
                                            <Link to="#" class="btn-transparent">Prima Liuam</Link>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="carousel-container">
                                                <div class="crsl-items" data-navigation="navbtns">
                                                    <div class="crsl-wrap">
                                                        {/* <figure class="crsl-item">
                                                            <img src="assets/img/1.jpg" alt="Image" class="img-responsive img-thumbnail" />
                                                        </figure>
                                                        <figure class="crsl-item">
                                                            <img src="assets/img/2.jpg" alt="Image" class="img-responsive img-thumbnail" />
                                                        </figure>
                                                        <figure class="crsl-item">
                                                            <img src="assets/img/3.jpg" alt="Image" class="img-responsive img-thumbnail" />
                                                        </figure> */}
                                                        <AliceCarousel autoPlay autoPlayInterval="3000" class="crsl-item">
                                                            <img src={image1} className="sliderimg" class="img-responsive img-thumbnail" />
                                                            <img src={image2} className="sliderimg" class="img-responsive img-thumbnail" />
                                                            <img src={image3} className="sliderimg" class="img-responsive img-thumbnail"/>
                                                        </AliceCarousel>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- carousel-container --> */}

                                        </div>
                                    </div>
                                    {/* end section content  */}
                                </div>
                            </section>
                            {/* <!-- Who We Are --> */}
                            <section class="templatemo-container light-gray-bg section-shadow-bottom">
                                <div class="container">
                                    <div class="row section-title-container">
                                        <div class="col-lg-12 text-uppercase text-center">
                                            <h2 class="section-title">Who we are</h2>
                                            <div class="section-title-underline-blue"></div>
                                            <hr class="section-title-underline" />
                                            <p class="small">Proin Gravidani</p>
                                        </div>
                                    </div>
                                    {/* <!-- row --> */}
                                    <div class="row">
                                        <div class="col-lg-5 col-md-5">
                                            <div class="tm-blocks-container effect1">
                                                <div class="tm-block green-bg">
                                                    <Link to="#" class="tm-block-link">Technologies</Link>
                                                </div>
                                                <div class="tm-block">
                                                    <img src="assets/img/4.jpg" alt="Image" class="img-responsive" />
                                                </div>
                                                <div class="tm-block">
                                                    <img src="assets/img/5.jpg" alt="Image" class="img-responsive" />
                                                </div>
                                                <div class="tm-block red-bg">
                                                    <Link to="#" class="tm-block-link">Vision</Link>
                                                </div>
                                                <div class="tm-block yellow-bg">
                                                    <Link to="#" class="tm-block-link">Awards</Link>
                                                </div>
                                                <div class="tm-block">
                                                    <img src="assets/img/6.jpg" alt="Image" class="img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-7 col-md-7">
                                            <h3 class="section-title-2 text-uppercase font-weight-300"><b>Our</b> <span class="blue-text">Technologies</span></h3>
                                            <p class="justify-text">Sed tempor ante aliquam, finibus diam in, mattis enim. Aliquam neque odio, aliquam non ullamcorper nec, tempus non libero. Etiam in odio rutrum, euismod massa quis, ullamcorper diam. Mauris ac lectus mollis, mollis tortor vel, placerat elit. Quisque euismod ut neque in rutrum. Quisque vitae dignissim elit. Aliquam vel erat ante. Pellentesque luctus efficitur ultrices. Nam eget odio ultrices, laoreet arcu eu, vehicula ligula. Quisque non nisi finibus, consequat nulla vitae, accumsan lectus. Morbi vestibulum, massa a gravida commodo, enim nisi porttitor nulla, ut aliquam turpis urna non sem. Suspendisse id odio ac orci ornare fermentum. Sed tincidunt id odio vel interdum.</p>
                                            <p class="justify-text">
                                                Etiam mollis nisi ut eleifend condimentum. Morbi posuere convallis lacus, a venenatis risus mattis eget. Vestibulum vitae gravida augue, vitae molestie dui. Duis lobortis nisi eget consequat tincidunt. Sed vel tortor vitae nisl pharetra dignissim. Sed lorem neque, sagittis eget sem sit amet, aliquet fringilla tortor. Praesent et aliquet arcu. Nunc tempor vulputate sapien, ut varius risus blandit at.
                                    </p>
                                            <p class="justify-text">
                                                Phasellus lobortis nisl ut tortor placerat, vel auctor felis semper. Quisque ut auctor sapien. Proin gravida arcu malesuada, venenatis nisl vitae, egestas sem. Vestibulum mauris magna, aliquam non commodo ac, porttitor a augue. Cras laoreet est at magna malesuada, a viverra ipsum luctus. Nullam sed lacinia magna. Donec ullamcorper lectus et diam porttitor, a tincidunt diam iaculis. Donec sagittis posuere pellentesque.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- Blog --> */}
                            <section class="templatemo-container">
                                <div class="container">
                                    <div class="row section-title-container">
                                        <div class="col-lg-12 text-uppercase text-center">
                                            <h2 class="section-title">Blog</h2>
                                            <div class="section-title-underline-blue"></div>
                                            <hr class="section-title-underline" />
                                            <p class="small">Proin Gravidani</p>
                                        </div>
                                    </div>
                                    <div class="row posts-container">
                                        <div class="post-excerpt post-excerpt-left">
                                            <div class="post-content">
                                                <h3 class="post-title">Nullam Acurna Euelis</h3>
                                                <p class="post-description">Scondimentum siamet augue autodit sit red non neque elit edut nemoen.</p>
                                            </div>
                                            <div class="post-date-container">
                                                <div class="post-month">Nov</div>
                                                <div class="post-date">18</div>
                                            </div>
                                            <div class="post-arrow-container rotate-arrow">
                                                <img src="assets/img/blog-arrow.png" alt="arrow" />
                                            </div>
                                        </div>
                                        <div class="post-excerpt post-excerpt-right">
                                            <div class="post-arrow-container">
                                                <img src="assets/img/blog-arrow.png" alt="arrow" />
                                            </div>
                                            <div class="post-date-container">
                                                <div class="post-month">Nov</div>
                                                <div class="post-date">19</div>
                                            </div>
                                            <div class="post-content">
                                                <h3 class="post-title">Condenimtin nemoa</h3>
                                                <p class="post-description">Scondimentum siamet augue autodit sit red non neque elit edut nemoen.</p>
                                            </div>
                                        </div>
                                        <div class="post-excerpt post-excerpt-left">
                                            <div class="post-content">
                                                <h3 class="post-title">Voluptatem Quial</h3>
                                                <p class="post-description">Scondimentum siamet augue autodit sit red non neque elit edut nemoen.</p>

                                            </div>
                                            <div class="post-date-container">
                                                <div class="post-month">Nov</div>
                                                <div class="post-date">20</div>
                                            </div>
                                            <div class="post-arrow-container rotate-arrow">
                                                <img src="assets/img/blog-arrow.png" alt="arrow" />
                                            </div>
                                        </div>
                                        <div class="post-excerpt post-excerpt-right">
                                            <div class="post-arrow-container">
                                                <img src="assets/img/blog-arrow.png" alt="arrow" />
                                            </div>
                                            <div class="post-date-container">
                                                <div class="post-month">Nov</div>
                                                <div class="post-date">21</div>
                                            </div>
                                            <div class="post-content">
                                                <h3 class="post-title">Augue Autioist</h3>
                                                <p class="post-description">Scondimentum siamet augue autodit sit red non neque elit edut nemoen.</p>

                                            </div>
                                        </div>
                                        <div class="post-excerpt post-excerpt-left">
                                            <div class="post-content">
                                                <h3 class="post-title">Tempori Autemos</h3>
                                                <p class="post-description">Scondimentum siamet augue autodit sit red non neque elit edut nemoen.</p>
                                            </div>
                                            <div class="post-date-container">
                                                <div class="post-month">Nov</div>
                                                <div class="post-date">22</div>
                                            </div>
                                            <div class="post-arrow-container rotate-arrow">
                                                <img src="assets/img/blog-arrow.png" alt="arrow" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- Features --> */}
                            <section class="templatemo-container features">
                                <div class="container features-content">
                                    <div class="row section-title-container">
                                        <div class="col-lg-12 text-uppercase text-center">
                                            <h2 class="section-title">Features</h2>
                                            <div class="section-title-underline-blue"></div>
                                            <hr class="section-title-underline" />
                                            <p class="small">Proin Gravidani</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="feature-container">
                                            <p class="text-center margin-bottom-30 gray-text">Consequat ipsum, nex sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                                            <div class="tm-progress-container tm-progress-container-left">
                                                <div class="tm-progress-label">
                                                    <p class="pull-left">Wordpress</p>
                                                    <p class="pull-right">80%</p>
                                                </div>
                                                <div class="progress tm-progress">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" const-style="width: 80%;">
                                                        <span class="sr-only">80% Complete</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tm-progress-container tm-progress-container-right">
                                                <div class="tm-progress-label">
                                                    <p class="pull-left">SEO</p>
                                                    <p class="pull-right">75%</p>
                                                </div>
                                                <div class="progress tm-progress">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" const-style="width: 75%;">
                                                        <span class="sr-only">75% Complete</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tm-progress-container tm-progress-container-left">
                                                <div class="tm-progress-label">
                                                    <p class="pull-left">Web Design</p>
                                                    <p class="pull-right">90%</p>
                                                </div>
                                                <div class="progress tm-progress">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" const-style="width: 90%;">
                                                        <span class="sr-only">90% Complete</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tm-progress-container tm-progress-container-right">
                                                <div class="tm-progress-label">
                                                    <p class="pull-left">UX</p>
                                                    <p class="pull-right">86%</p>
                                                </div>
                                                <div class="progress tm-progress">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" const-style="width: 86%;">
                                                        <span class="sr-only">86% Complete</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-overlay"></div>
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

            export default Home;

![](img/home.png)

![](img/home2.png)

![](img/home3.png)

![](img/home4.png)

6. Code : pages/About.js

            import React, { Component } from 'react';
            import { Link } from 'react-router-dom';
            class About extends React.Component {
                render() {
                    return (
                        <div>
                            <div class="header-img-2"></div>
                            {/* <!-- end header image -->
                    <!-- Welcome message --> */}
                            <div class="welcome-container">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="welcome-wrapper">
                                                <h2 class="welcome-title text-uppercase">About Us</h2>
                                                <img src="assets/img/welcome-divider-lines.png" alt="Welcome divider" class="welcome-divider-lines-img" />
                                                <p class="welcome-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lectus augue, non rhoncus erat accumsan eu. Sed dictum sem.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Welcome message -->
                    <!-- main content --> */}
                            <section class="templatemo-container section-shadow-bottom">
                                <div class="container">
                                    <div class="row section-title-container">
                                        <div class="col-lg-12 text-uppercase text-center">
                                            <h2 class="section-title">Who We Are</h2>
                                            <div class="section-title-underline-blue"></div>
                                            <hr class="section-title-underline" />
                                            <p class="small">Lorem ip sums</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-7 col-md-7 col-sm-7 tm-about-left">
                                            <img src="assets/img/7.jpg" alt="Image" class="img-responsive margin-bottom-30" />
                                            <h3 class="section-title-2 text-uppercase font-weight-300"><b>Morbi</b> <span class="blue-text">Accumsan</span></h3>
                                            <p class="justify-text">Morbi dapibus rhoncus nulla ac tempus. Integer felis lorem, fermentum quis nisl accumsan, gravida gravida est. Cras ultrices rhoncus dui ut laoreet. Fusce tincidunt, urna a imperdiet tempor, orci dolor dictum elit, sit amet malesuada mauris magna eget dolor.</p>
                                            <p class="justify-text margin-bottom-30">Phasellus lobortis nisl ut tortor placerat, vel auctor felis semper. Quisque ut auctor sapien. Proin gravida arcu malesuada, venenatis nisl vitae, egestas sem. Vestibulum mauris magna, aliquam non commodo ac, porttitor a augue.</p>
                                            <Link to="#" class="btn-blue-gradient">Prima Liuam</Link>
                                        </div>
                                        <div class="col-lg-5 col-md-5 col-sm-5 tm-about-right">
                                            <div class="tm-img-container margin-bottom-30">
                                                <div class="tm-img-overlay">
                                                    <p class="img-description">Feufelisda</p>
                                                    <p class="img-title">Nullam Acurna</p>
                                                </div>
                                                <img src="assets/img/8.jpg" alt="Image" class="img-responsive" />
                                            </div>
                                            <div class="tm-img-container margin-bottom-30">
                                                <div class="tm-img-overlay">
                                                    <p class="img-description">Feufelisda</p>
                                                    <p class="img-title">Nullam Acurna</p>
                                                </div>
                                                <img src="assets/img/9.jpg" alt="Image" class="img-responsive" />
                                            </div>
                                            <div class="tm-img-container margin-bottom-30">
                                                <div class="tm-img-overlay">
                                                    <p class="img-description">Feufelisda</p>
                                                    <p class="img-title">Nullam Acurna</p>
                                                </div>
                                                <img src="assets/img/10.jpg" alt="Image" class="img-responsive" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="templatemo-container light-gray-bg section-shadow-bottom">
                                <div class="container">
                                    <div class="row section-title-container">
                                        <div class="col-lg-12 text-uppercase text-center">
                                            <h2 class="section-title">Who we are</h2>
                                            <div class="section-title-underline-blue"></div>
                                            <hr class="section-title-underline" />
                                            <p class="small">Proin Gravidani</p>
                                        </div>
                                    </div>
                                    {/* <!-- row --> */}
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-sm-4 text-center tm-about-container-2">
                                            <img src="assets/img/11.png" alt="Image" />
                                            <h3 class="text-uppercase about-h3">Lorem Quis</h3>
                                            <p class="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat.</p>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 text-center tm-about-container-2">
                                            <img src="assets/img/12.png" alt="Image" />
                                            <h3 class="text-uppercase about-h3">Proin Gravid</h3>
                                            <p class="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat.</p>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 text-center tm-about-container-2">
                                            <img src="assets/img/13.png" alt="Image" />
                                            <h3 class="text-uppercase about-h3">Consequat</h3>
                                            <p class="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="templatemo-container">
                                <div class="container">
                                    <div class="row margin-bottom-30">
                                        <div class="col-lg-12 text-uppercase text-center">
                                            <h2 class="section-title">Recent Posts</h2>
                                            <div class="section-title-underline-blue"></div>
                                            <hr class="section-title-underline" />
                                            <p class="small">Proin Gravidani</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="recent-post-container">
                                                <h3 class="text-uppercase recent-post-title margin-bottom-30"><span class="font-weight-700">Aenean</span> <span class="font-weight-300 blue-text">Sollicitum</span></h3>
                                                <img src="assets/img/14.jpg" alt="Image" class="img-responsive margin-bottom-30" />
                                                <p class="justify-text"><span class="red-text">Aenean sollicitudin</span>, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="recent-post-container">
                                                <h3 class="text-uppercase recent-post-title margin-bottom-30"><span class="font-weight-700">Lorem</span> <span class="font-weight-300 blue-text">Ipsums</span></h3>
                                                <img src="assets/img/15.jpg" alt="Image" class="img-responsive margin-bottom-30" />
                                                <p class="justify-text"><span class="red-text">Aenean sollicitudin</span>, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="recent-post-container">
                                                <h3 class="text-uppercase recent-post-title margin-bottom-30"><span class="font-weight-700">Duis</span> <span class="font-weight-300 blue-text">Sedoido</span></h3>
                                                <img src="assets/img/16.jpg" alt="Image" class="img-responsive margin-bottom-30" />
                                                <p class="justify-text"><span class="red-text">Aenean sollicitudin</span>, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="recent-post-container">
                                                <h3 class="text-uppercase recent-post-title margin-bottom-30"><span class="font-weight-700">Amet</span> <span class="font-weight-300 blue-text">Nigh</span></h3>
                                                <img src="assets/img/17.jpg" alt="Image" class="img-responsive margin-bottom-30" />
                                                <p class="justify-text"><span class="red-text">Aenean sollicitudin</span>, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
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

            export default About;

![](img/about.png)

![](img/about1.png)


7. Code : pages/Profile.js

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

![](img/profile.png)

8. Code : pages/Contact.js

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

![](img/contact.png)

9. Code : pages/Lainya.js

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

![](img/lainya.png)

10. Code : pages/Api.js

            import React, { Component } from 'react';
            // import './App.css';
            import ItemDetails from './item-details';
            import NewItem from './new-item';
            import EditItem from './edit-item';
            import ItemService from './mock-item-service';

            class Api extends Component {
                constructor(props) {
                    super(props);
                    this.itemService = new ItemService();
                    this.onSelect = this.onSelect.bind(this);
                    this.onNewItem = this.onNewItem.bind(this);
                    this.onEditItem = this.onEditItem.bind(this);
                    this.onCancel = this.onCancel.bind(this);
                    this.onCancelEdit = this.onCancelEdit.bind(this);
                    this.onCreateItem = this.onCreateItem.bind(this);
                    this.onUpdateItem = this.onUpdateItem.bind(this);
                    this.onDeleteItem = this.onDeleteItem.bind(this);
                    this.state = {
                        showDetails: false,
                        editItem: false,
                        selectedItem: null,
                        newItem: null
                    }
                }
                componentDidMount() {
                    this.getItems();
                }
                render() {
                    const items = this.state.items;
                    if (!items) return null;
                    const showDetails = this.state.showDetails;
                    const selectedItem = this.state.selectedItem;
                    const newItem = this.state.newItem;
                    const editItem = this.state.editItem;
                    const listItems = items.map((item) =>
                        <li key={item.link} onClick={() => this.onSelect(item.link)}>
                            <span className="item-name">{item.name}</span> |  {item.latitude}
                        </li>
                    );
                    return (
                        <div>
                            <div class="img-055"></div>
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
                            <section class="templatemo-container">
                                <div class="container">
                                    <div class="row margin-bottom-30">
                                        <div class="col-lg-12 text-uppercase text-center">
                                            <h2 class="section-title">REST API</h2>
                                            <div class="text-uppercase contact-point-title blue-text font-weight-700"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="App">
                                    <ul class="text-uppercase contact-point-title blue-text font-weight-700">
                                        {listItems}
                                    </ul>
                                    <br />
                                    <button class="text-uppercase contact-point-title blue-text font-weight-700" type="button" name="button" onClick={() => this.onNewItem()}>Edit Data</button>
                                    <br />
                                    {newItem && <NewItem onSubmit={this.onCreateItem} onCancel={this.onCancel}></NewItem>}
                                    {showDetails && selectedItem && <ItemDetails item={selectedItem} onEdit={this.onEditItem} onDelete={this.onDeleteItem} ></ItemDetails>}
                                    {editItem && selectedItem && <EditItem onSubmit={this.onUpdateItem} onCancel={this.onCancelEdit} item={selectedItem} ></EditItem>}
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

                getItems() {
                    this.itemService.retrieveItems().then(items => {
                        this.setState({ items: items });
                    }
                    );

                }


                onSelect(itemLink) {
                    this.clearState();
                    this.itemService.getItem(itemLink).then(item => {
                        this.setState({
                            showDetails: true,
                            selectedItem: item
                        });
                    }
                    );
                }

                onCancel() {
                    this.clearState();
                }
                onNewItem() {
                    this.clearState();
                    this.setState({
                        newItem: true
                    });
                }
                onEditItem() {
                    this.setState({
                        showDetails: false,
                        editItem: true,
                        newItem: null
                    });
                }

                onCancelEdit() {
                    this.setState({
                        showDetails: true,
                        editItem: false,
                        newItem: null
                    });

                }

                onUpdateItem(item) {
                    this.clearState();
                    this.itemService.updateItem(item).then(item => {
                        this.getItems();
                    }
                    );
                }
                onCreateItem(newItem) {
                    this.clearState();
                    this.itemService.createItem(newItem).then(item => {
                        this.getItems();
                    }
                    );
                }
                onDeleteItem(itemLink) {
                    this.clearState();
                    this.itemService.deleteItem(itemLink).then(res => {
                        this.getItems();
                    }
                    );
                }
                clearState() {
                    this.setState({
                        showDetails: false,
                        selectedItem: null,
                        editItem: false,
                        newItem: null
                    });
                }
            }

            export default Api;

11. Code : pages/item-details.js

            import React, { Component } from 'react';

            // import './App.css';


            class ItemDetails extends Component {


            constructor(props) {

                super(props);

                this.onEdit = this.onEdit.bind(this);

                this.onDelete = this.onDelete.bind(this);

            }


            render() {

                const item = this.props.item;

                return (

                <div className="input-panel">

                <div><span className="field-name">Name:</span><br/> {item.name}</div>

                <div><span className="field-name">latitude:</span><br/> {item.latitude}</div>

                <div><span className="field-name">lat:</span><br/> {item.lat}</div>

                <div><span className="field-name">longtitude:</span><br/> {item.longtitude}</div>

                <div><span className="field-name">long:</span><br/> {item.long}</div>

                <div><span className="field-name">Description:</span><br/> {item.description}</div>

                <br/>

                <button onClick={() => this.onDelete()}>Delete</button> 

                <button onClick={() => this.onEdit()}>Edit</button>

                </div>

                );

            }


            onEdit() {

                this.props.onEdit();

            }


            onDelete() {

                const item = this.props.item;

                if(window.confirm("Are you sure to delete item: " + item.name + " ?")) {

                this.props.onDelete(item.link);

                }

            }


            }


            export default ItemDetails;

12. Code : pages/edit-item.js

            import React, { Component } from 'react';

            // import './App.css';

            import Validator from '../shared/Validator';


            class EditItem extends Component {


            constructor(props) {

                super(props);

                this.validator = new Validator();

                this.onCancel = this.onCancel.bind(this);

                this.onSubmit = this.onSubmit.bind(this);

                this.handleInputChange = this.handleInputChange.bind(this);

                const itemToEdit = props.item;

                this.state = {

                name: itemToEdit.name,

                latitude: itemToEdit.latitude,

                lat: itemToEdit.lat,

                longtitude: itemToEdit.longtitude,

                description: itemToEdit.description,

                link: itemToEdit.link

                };

            }


            handleInputChange(event) {

                const target = event.target;

                const value = target.value;

                const name = target.name;


                this.setState({

                [name]: value

                });

            }


            onCancel() {

                this.props.onCancel();

            }


            onSubmit() {

                if (this.validator.validateInputs(this.state)) {

                this.props.onSubmit(this.state);

                }

            }


            render() {

                return (

                <div className="input-panel">

                <span className="form-caption">Edit item:</span> <span>{this.state.name}</span>

                <div>

                    <label className="field-name">Name:<br/>

                    <input value={this.state.name} name="name" maxLength="" required onChange={this.handleInputChange} placeholder="item name" />

                    </label>

                </div>

                <div>

                    <label className="field-name">latitude:<br/>

                    <input value={this.state.latitude} name="latitude" maxLength="" required onChange={this.handleInputChange} placeholder="latitude" />

                    </label>

                </div>

                <div>

                    <label className="field-name">lat:<br/>

                    <input value={this.state.lat} name="lat" maxLength="" pattern="[-]{,}" onChange={this.handleInputChange} placeholder="lat" />

                    </label>

                </div>

                <div>

                    <label className="field-name">longtitude:<br/>

                    <input value={this.state.longtitude} name="longtitude" maxLength="" pattern="[a-z|A-Z]{}" onChange={this.handleInputChange} placeholder="longtitude" />

                    </label>

                </div>

                <div>

                    <label className="field-name">Description:<br/>

                    <textarea value={this.state.description} name="description" onChange={this.handleInputChange} placeholder="description" />

                    </label>

                </div>

                <br/>

                <button onClick={() => this.onCancel()}>Cancel</button> 

                <button onClick={() => this.onSubmit()}>Update</button>

                </div>

                );

            }

            }


            export default EditItem;

13. Code : pages/new-item.js

            import React, { Component } from 'react';

            // import './App.css';

            import Validator from '../shared/Validator';


            class NewItem extends Component {


            constructor(props) {

                super(props);

                this.validator = new Validator();

                this.onCancel = this.onCancel.bind(this);

                this.onSubmit = this.onSubmit.bind(this);

                this.handleInputChange = this.handleInputChange.bind(this);

                this.state = {

                name: '',

                latitude: '',

                lat: '',

                longtitude: '',

                description: ''

                };

            }


            handleInputChange(event) {

                const target = event.target;

                const value = target.value;

                const name = target.name;


                this.setState({

                [name]: value

                });

            }


            onCancel() {

                this.props.onCancel();

            }


            onSubmit() {

                if(this.validator.validateInputs(this.state)) {

                    this.props.onSubmit(this.state);

                }

            }


            render() {

                return (

                <div className="input-panel">

                <span className="form-caption">New item:</span>

                <div>

                    <label className="field-name">Name:<br/>

                    <input value={this.state.name} name="name" maxLength="" required onChange={this.handleInputChange} placeholder="item name" />

                    </label>

                </div>

                <div>

                    <label className="field-name">latitude:<br/>

                    <input value={this.state.latitude} name="latitude" maxLength="" required onChange={this.handleInputChange} placeholder="latitude" />

                    </label>

                </div>

                <div>

                    <label className="field-name">lat:<br/>

                    <input value={this.state.lat} name="lat" maxLength="" pattern="[-]{,}" onChange={this.handleInputChange} placeholder="lat" />

                    </label>

                </div>

                <div>

                    <label className="field-name">longtitude:<br/>

                    <input value={this.state.longtitude} name="longtitude" maxLength="" pattern="[a-z|A-Z]{}" onChange={this.handleInputChange} placeholder="longtitude code" />

                    </label>

                </div>

                <div>

                    <label className="field-name">Description:<br/>

                    <textarea value={this.state.description} name="description" onChange={this.handleInputChange} placeholder="description" />

                    </label>

                </div>

                <br/>

                <button onClick={() => this.onCancel()}>Cancel</button> 

                <button onClick={() => this.onSubmit()}>Create</button>

                </div>

                );

            }

            }


            export default NewItem;

14. Code : pages/mock-item-service.js


            class ItemService {

                constructor () {

                    this.items = [

                        { link: 1, name: "Google Map 1", latitude: "1", lat: "-7.1502", longtitude: "1", long: "111.8817", description: "Bojonegoro" },
                        { link: 2, name: "Google Map 2", latitude: "2", lat: "-7.1503", longtitude: "2", long: "111.8818", description: "Bojonegoro" },
                        { link: 3, name: "Google Map 3", latitude: "3", lat: "-7.1504", longtitude: "3", long: "111.8819", description: "Bojonegoro" },
                        { link: 4, name: "Google Map 4", latitude: "4", lat: "-7.1505", longtitude: "4", long: "111.88110", description: "Bojonegoro" },
                        { link: 5, name: "Google Map 5", latitude: "5", lat: "-7.1506", longtitude: "5", long: "111.88111", description: "Bojonegoro" }

                    ];

                }

                async retrieveItems() {

                    return Promise.resolve(this.items);

                }


                async getItem(itemLink) {

                    for (var i = 0; i < this.items.length; i++) {

                        if (this.items[i].link === itemLink) {

                            return Promise.resolve(this.items[i]);

                        }

                    }

                    return null;

                }


                async createItem(item) {

                    console.log("ItemService.createItem():");

                    console.log(item);

                    return Promise.resolve(item);

                }

                async deleteItem(itemId) {

                    console.log("ItemService.deleteItem():");

                    console.log("item ID:" + itemId);

                }

                async updateItem(item) {

                    console.log("ItemService.updateItem():");

                    console.log(item);

                }

            }

            export default ItemService;

Code : shared/Validator.js

            class Validator {
                
                
                validateInputs(inputData) {
                
                    let errorMsg = "";
                
                    if(!inputData.name) {
                
                    errorMsg +="Please enter name of this item.\n"
                
                    }
                
                    if(!inputData.summary) {
                
                    errorMsg +="Please enter summary of this item.\n"
                
                    }
                
                    if(inputData.year.toString().match(/[^0-9]/g)) {
                
                    errorMsg +="Year must be a number.\n"
                
                    }
                
                    if(inputData.longtitude.length > 0 && !inputData.longtitude.match(/^[a-z|A-Z][a-z|A-Z]$/)) {
                
                    errorMsg +="longtitude code must be two letters.\n"
                
                    }
                
                    if(errorMsg.length === 0){
                
                    return true;
                
                    } else {
                
                    alert(errorMsg);
                
                    return false;
                
                    }
                
                }
                
                }
                
                
                export default Validator;

![](img/a1.png)

![](img/a2.png),![](img/a3.png),![](img/a4.png)

15. Membuat fiture Search 

Create folder search & apps in pages

![](img/s1.png)

Code : search/index.js

            import Search from './apps/components/search';

            export default Search;

Code : search/registerServiceWorker.js

            // In production, we register a service worker to serve assets from local cache.

            // This lets the app load faster on subsequent visits in production, and gives
            // it offline capabilities. However, it also means that developers (and users)
            // will only see deployed updates on the "N+1" visit to a page, since previously
            // cached resources are updated in the background.

            // To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
            // This link also includes instructions on opting out of this behavior.

            const isLocalhost = Boolean(
            window.location.hostname === 'localhost' ||
                // [::1] is the IPv6 localhost address.
                window.location.hostname === '[::1]' ||
                // 127.0.0.1/8 is considered localhost for IPv4.
                window.location.hostname.match(
                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                )
            );

            export default function register() {
            if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
                // The URL constructor is available in all browsers that support SW.
                const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
                if (publicUrl.origin !== window.location.origin) {
                // Our service worker won't work if PUBLIC_URL is on a different origin
                // from what our page is served on. This might happen if a CDN is used to
                // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
                return;
                }

                window.addEventListener('load', () => {
                const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

                if (isLocalhost) {
                    // This is running on localhost. Lets check if a service worker still exists or not.
                    checkValidServiceWorker(swUrl);

                    // Add some additional logging to localhost, pointing developers to the
                    // service worker/PWA documentation.
                    navigator.serviceWorker.ready.then(() => {
                    console.log(
                        'This web app is being served cache-first by a service ' +
                        'worker. To learn more, visit https://goo.gl/SC7cgQ'
                    );
                    });
                } else {
                    // Is not local host. Just register service worker
                    registerValidSW(swUrl);
                }
                });
            }
            }

            function registerValidSW(swUrl) {
            navigator.serviceWorker
                .register(swUrl)
                .then(registration => {
                registration.onupdatefound = () => {
                    const installingWorker = registration.installing;
                    installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                        // At this point, the old content will have been purged and
                        // the fresh content will have been added to the cache.
                        // It's the perfect time to display a "New content is
                        // available; please refresh." message in your web app.
                        console.log('New content is available; please refresh.');
                        } else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        console.log('Content is cached for offline use.');
                        }
                    }
                    };
                };
                })
                .catch(error => {
                console.error('Error during service worker registration:', error);
                });
            }

            function checkValidServiceWorker(swUrl) {
            // Check if the service worker can be found. If it can't reload the page.
            fetch(swUrl)
                .then(response => {
                // Ensure service worker exists, and that we really are getting a JS file.
                if (
                    response.status === 404 ||
                    response.headers.get('content-type').indexOf('javascript') === -1
                ) {
                    // No service worker found. Probably a different app. Reload the page.
                    navigator.serviceWorker.ready.then(registration => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                    });
                } else {
                    // Service worker found. Proceed as normal.
                    registerValidSW(swUrl);
                }
                })
                .catch(() => {
                console.log(
                    'No internet connection found. App is running in offline mode.'
                );
                });
            }

            export function unregister() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(registration => {
                registration.unregister();
                });
            }
            }

Code : apps/index.js

            import AppContainer from './containers/AppContainer';

            export default AppContainer;


Code : components/renderFoeld.js

            import React from 'react';
            import { FormGroup, Label, Input } from 'reactstrap';

            const renderField = ({
            input,
            label,
            type,
            meta: { touched, error, warning },
            }) => (
            <FormGroup>
                <Label>{label}</Label>
                <Input {...input} placeholder={label} type={type} />
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </FormGroup>
            );

            export default renderField;


Code : components/search.js

            import React, { Component } from 'react';
            import { Container, Row, Col, Card, CardImg } from 'reactstrap';

            import SearchForm from './SearchForm';
            import './App.css';

            class Apps extends Component {
            constructor(props) {
                super(props);

                this.fetchImage = this.fetchImage.bind(this);
            }

            fetchImage({ keyword }) {
                this.props.fetchImage(keyword);
            }

            render() {
                const { loading, images } = this.props;

                return (
                <Container>
                    <Row>
                    <Col>
                        <h1>Search</h1>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <SearchForm onSubmit={this.fetchImage} />
                    </Col>
                    </Row>
                    { loading && <div>loading...</div> }
                    { !loading && images && images.length > 0 &&
                    <Row>
                        { images.map((url, index) => {
                        return <Col key={index} xs="12" sm="6" md="4" lg="3">
                            <Card>
                            <CardImg src={url} />
                            </Card>
                        </Col>
                        })}
                    </Row>
                    }
                </Container>
                );
            }
            }

            export default Apps;


Code : components/SearchForm.js

            import React from 'react';
            import { Field, reduxForm } from 'redux-form';
            import { Button } from 'reactstrap';
            import renderField from './renderField';

            const validate = (values) => {
            const errors = {};
            if (!values.keyword) {
                errors.keyword = 'Required';
            }
            return errors;
            };

            const SearchForm = ({ handleSubmit, pristine, submitting }) => {
            return (
                <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                }}>
                <Field
                    name="keyword"
                    component={renderField}
                    type="text"
                    label="Keyword"
                    placeholder="Enter a keyword"
                />
                <div>
                    <Button type="submit" disabled={pristine || submitting}>
                    Submit
                    </Button>
                </div>
                </form>
            );
            };

            export default reduxForm({
            form: 'searchForm',
            validate,
            })(SearchForm);

Code : containers/AppCntainers.js

            import { connect } from 'react-redux';
            import Search from '../components/search';

            import { fetchImage } from '../modules/actions';

            export default connect(
            ({ app }) => ({ ...app }),
            (dispatch) => ({
                fetchImage: (keyword) => dispatch(fetchImage(keyword)),
            }),
            )(Search);

Code : modules/action

            import axios from 'axios';
            import {
            SEARCH_REQUEST,
            SEARCH_SUCCESS,
            SEARCH_ERROR,
            } from './index';

            export const searchStart = () => {
            return {
                type: SEARCH_REQUEST,
            };
            };

            export const searchSuccess = (images) => {
            return {
                type: SEARCH_SUCCESS,
                payload: images,
            };
            };

            export const searchError = (errors) => {
            return {
                type: SEARCH_ERROR,
                errors,
            };
            };

            export const fetchImage = (keyword) => {
            return (dispatch) => {
                dispatch(searchStart());
                axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC`)
                .then((response) => {
                    const images = response.data.data.map((image) => image.images.original.url);
                    dispatch(searchSuccess(images));
                })
                .catch((error) => {
                    dispatch(searchError(error));
                });
            };
            };


Code : modules/index.js

            export const SEARCH_REQUEST = 'SEARCH_REQUEST';
            export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
            export const SEARCH_ERROR = 'SEARCH_ERROR';

            const initialState = {
            loading: false,
            images: null,
            errors: null,
            };

            const app = (state = initialState, action) => {
            switch(action.type) {
                case SEARCH_REQUEST:
                return { ...state, loading: true };

                case SEARCH_SUCCESS:
                return { ...state, loading: false, images: action.payload };

                case SEARCH_ERROR:
                return { ...state, loading: false, errors: action.errors };
                default:
                return state;
            }
            };

            export default app;

Code : store/index.js

            import { createStore, applyMiddleware, compose } from 'redux';
            import { routerMiddleware } from 'react-router-redux';
            import thunk from 'redux-thunk';
            import createHistory from 'history/createBrowserHistory';
            import logger from 'redux-logger';

            import rootReducer from './reducer';

            export const history = createHistory();

            const initialState = {};
            const enhancers = [];
            const middleware = [thunk, routerMiddleware(history), logger];

            if (process.env.NODE_ENV === 'development') {
            const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

            if (typeof devToolsExtension === 'function') {
                enhancers.push(devToolsExtension());
            }
            }

            const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

            export default createStore(rootReducer, initialState, composedEnhancers);


Code : store/reducer.js

            import { combineReducers } from 'redux';
            import { routerReducer } from 'react-router-redux';
            import { reducer as formReducer } from 'redux-form'

            import app from '../pages/search/apps/modules';

            export default combineReducers({
            router: routerReducer,
            form: formReducer,
            app,
            });

![](img/s2.png)

![](img/s3.png)


Membuat slider

npm i react-alice-carousel

Code :

     <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={image1} className="sliderimg" />
            <img src={image2} className="sliderimg" />
            <img src={image3} className="sliderimg" />
            <img src={image4} className="sliderimg" />
      </AliceCarousel>


![](img/slider.png)




