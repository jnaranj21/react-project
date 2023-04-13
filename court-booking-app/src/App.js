import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "./app/components/Button";
import "./App.css";
import Navbar from "./app/components/Navbar";
import Footer from "./app/components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="container-customized">
        <Row>
          <Col xs={12} className="mt-5">
            <p className="header-text text-center fw-bold mb-0">
              EASY<span className="text-green">TENIS</span>
            </p>
            <p className="body-text text-center">
              #1 Tennis Courts Booking App in Spain!
            </p>
          </Col>
          <Col className="text-center">
            <Button buttonStyle="btn--outline" buttonSize="btn--large">
              BOOK CLAY COURTS
            </Button>
            <Button buttonStyle="btn--primary" buttonSize="btn--large">
              BOOK HARD COURTS
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
