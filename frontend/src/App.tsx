import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Controller from "./components/Controller";
import LandingPage from "./LandingPage";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/controller" component={Controller} />
      </Router>
    </div>
  );
};

export default App;
