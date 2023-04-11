import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "./app/components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} className="mt-5">
            <p className="header-text text-center fw-bold mb-0">EASY TENIS</p>
            <p className="body-text text-center">
              #1 Tenis Courts Booking App in Spain!
            </p>
          </Col>
          <Col>
            {<Button buttonStyle="btn--outline">BOOK CLAY COURTS</Button>}
            {<Button buttonStyle="btn--outline">BOOK HARD COURTS</Button>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
