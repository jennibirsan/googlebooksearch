import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Save from "./pages/Save";
import Search from "./pages/Search"
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Save} />
          <Route exact path="/saved/:id" component={Save} />
          <Route component={NoMatch} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;