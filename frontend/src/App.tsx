import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Controller from "./components/Controller";
import LandingPage from "./components/LandingPage";
import UploadPage from "./components/UploadPage";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/upload" exact component={UploadPage} />
        <Route path="/controller" component={Controller} />
      </Router>
    </div>
  );
};

export default App;
