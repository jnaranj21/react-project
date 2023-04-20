import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Button } from '../../components/Button';

const CourtCard = ( {court} ) => {
    const {image, name} = court;
  return (
    <Card>
      <CardImg
        width="100%"
        src={image}
        alt={name}
      />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
    <Button buttonStyle="btn--primary" buttonSize="btn--large">Book now</Button>
    </Card>
  );
};

export default CourtCard;
