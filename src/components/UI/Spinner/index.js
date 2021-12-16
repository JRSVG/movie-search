import { Spinner } from "react-bootstrap";

const SpinnerComponent = (props) => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Načítavam...</span>
    </Spinner>
  );
};

export default SpinnerComponent;
