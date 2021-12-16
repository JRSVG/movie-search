import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import FavoriteIcon from "../UI/FavoriteIcon";

const ListItem = (props) => {
  const { Title: title, Year: year, Poster: imgSrc, imdbID: id } = props.movie;

  const [imageSource, setImageSource] = useState(imgSrc);

  const fallbackImageSource =
    "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=";

  return (
    <Card
      style={{ width: "calc(100%-1rem)", maxHeight: "28rem", margin: "0.2rem" }}
    >
      <Card.Img
        style={{ height: "16rem" }}
        variant="top"
        src={imageSource}
        onError={() => setImageSource(fallbackImageSource)}
      />
      <Card.Body>
        <Card.Title>
          {title} <FavoriteIcon movieId={id} />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{year}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <Link to={`/filmy/${id}`}>
          <Button variant="link" size="sm">
            Viac info
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default ListItem;
