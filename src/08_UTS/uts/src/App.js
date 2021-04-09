import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Lainya from './pages/Lainya';
import Api from './pages/Api';
// import Search from './pages/Search/index';
// import App from './containers/AppContainer';
// import Index from './pages/App';
// import Galery from './App/components/Galery';
// import appContainers from './App/containers/AppContainer';
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
            {/* <Route path="/search"  component={Search}/> */}
            {/* <Route path="/galery"  component={Galery}/> */}
            {/* <Route path="/appContainers"  component={appContainers}/> */}
          </Switch>
        <Footer/>

    </Router>

    // <div>

    // </div>

  );
}

export default App;
