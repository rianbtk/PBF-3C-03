import "./App.css";
import Header from "./component/Header.js"
import Footer from "./component/Footer.js"
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Contact from "./pages/Contact.js";
import TodaySpecial from "./pages/TodaySpecial.js";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

function App () {
  return <Router>

              <Header/>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="Menu" exact component={Menu}/>
                <Route path="Contact" exact component={Contact}/>
                <Route path="TodaySpecial" exact component={TodaySpecial}/>
              </Switch> 
              <Footer/>         

  </Router>
}

export default App;