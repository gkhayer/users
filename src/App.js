import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import Adduser from "./components/users/Adduser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditUser from "./components/users/EditUser";
import Viewuser from "./components/users/Viewuser";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={Adduser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={Viewuser} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
