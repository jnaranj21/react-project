import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import TestImg from "./app/assets/img/TestImg.jpg";

function App() {
  return (
    <>
      <div style={{ height: "100vh", width: "auto" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact></Route>
          </Routes>
        </Router>
        <img
          src={TestImg}
          alt="padel tennis courts"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
    </>
  );
}

export default App;
