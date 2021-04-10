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

    // <div>

    // </div>

  );
}

export default App;
