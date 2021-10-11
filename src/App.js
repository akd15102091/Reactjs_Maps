import React from "react"
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./index.css" 
import {Switch,Route, Redirect} from "react-router-dom"
import City_loc from "./components/City_loc";
import About from "./components/About"
import MapComponent from "./components/MapComponent";
import ManuallySearch from "./components/ManuallySearch";


function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={City_loc} />
        <Route exact path="/mapcomponent" component={MapComponent} />
        <Route exact path="/manualsearch" component={ManuallySearch} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;