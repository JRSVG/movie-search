import { Card } from "react-bootstrap";
import classes from './index.module.css';

const Review = ({ from, value }) => {
  return (
    <Card
      bg="light"
      className={classes.card}
    >
      <Card.Header>{from}</Card.Header>
      <Card.Body>
        <Card.Title>Hodnotenie</Card.Title>
        <Card.Text>
          {value}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Review;
