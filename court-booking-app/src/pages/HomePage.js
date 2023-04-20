import { Container, Row, Col } from "reactstrap";
import { Button } from "../components/Button";

const HomePage = () => {
  return (
    <Container className="container-customized">
      <Row>
        <Col xs={12} className="mt-5">
          <p className="header-text text-center fw-bold mb-0">
            EASY<span className="text-green">TENIS</span>
          </p>
          <p className="body-text text-center">#1 TENNIS APP IN SPAIN!</p>
        </Col>
        <Col className="text-center">
          <Button buttonStyle="btn--outline" buttonSize="btn--large">
            BOOK COURTS
          </Button>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">
            TAKE CLASSES
          </Button>
          <Button buttonStyle="btn--primary" buttonSize="btn--large">
            JOIN MATCHES
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
