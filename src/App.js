import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/atoms/nav";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <div className="w-full bg-slate-200 h-[100vh]">
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
