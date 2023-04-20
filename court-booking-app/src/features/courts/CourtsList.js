import { COURTS } from "../../app/shared/COURTS";
import { Col, Row } from "reactstrap";
import CourtCard from "./CourtCard";

const CourtsList = () => {
  return (
    <Row className="ms-auto">
      {COURTS.map ((court) => {
          return (
            <Col md="5" className="m-4" key={court.id}>
              <CourtCard court={court} />
            </Col>
          );
        })
      }
    </Row>
  );
};

export default CourtsList; 