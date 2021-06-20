import React,{Component} from 'react';
import Beranda from './Beranda';
import Praktikum from './Home/Praktikum';
import Home from './Home/Home';
import Berita from './Berita';
import Tentang from './Tentang';
import Codelab1 from './Codelab1';
import Codelab2 from './Codelab2';
import BlogPost from './BlogPost';

import '../style/styles.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
 
class App extends Component {
    render(){
      return(
        <Router>
        <div className="header">
         <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light warna">
                <button className="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle text-white" to="Home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Menu
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="dropdown-item " to="/">Home</Link>
                          <Link class="dropdown-item " to="/praktikum">Praktikum</Link>
                        </div>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-white" to="/beranda">Beranda</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-white" to="/blog">BlogSpot</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-white" to="/berita">Berita</Link>
                          {/* <Link className="dropdown-item" to="/berita">Another action</Link> */}
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-white" to="/tentang">Tentang</Link>
                      </li>
                      <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle text-white" to="Home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Codelab
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="dropdown-item " to="/codelab1">React JS</Link>
                          <Link class="dropdown-item " to="/codelab2">React Router</Link>
                        </div>
                      </li>
                    </ul>
                </div>
            </nav>             
         </div>
         <div className="">
        
 
            <Route path="/" exact component={Home}/>
            <Route path="/beranda"  component={Beranda}/>
            <Route path="/praktikum"  component={Praktikum}/>
            <Route path="/berita"  component={Berita}/>
            <Route path="/tentang"  component={Tentang}/>
            <Route path="/codelab1"  component={Codelab1}/>
            <Route path="/codelab2"  component={Codelab2}/>
            <Route path="/blog"  component={BlogPost}/>
         </div>
 
        </div>
        </Router>
      )
    }
}
 
export default App;