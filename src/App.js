import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Favourite from "./pages/Favourite";
import Bought from "./pages/Bought";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import "./Normalise.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/favourite" component={Favourite}></Route>
        <Route path="/bought" component={Bought}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}
