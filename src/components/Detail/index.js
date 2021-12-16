import { Fragment } from "react";
import { Row, Col, Badge, Figure } from "react-bootstrap";
import FavoriteIcon from "../../components/UI/FavoriteIcon";
import Review from "../../components/UI/Review";

const Detail = ({ movieDetail }) => {
  const {
    Title: title,
    Year: year,
    Rated: rated,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    Director: director,
    Writer: writer,
    Actors: actors,
    Plot: plot,
    Language: language,
    Country: country,
    Awards: awards,
    Poster: poster,
    Ratings: ratings,
    Metascore: metascore,
    imdbRating,
    imdbVotes,
    imdbID: imdbId,
    Type: type,
    DVD: dvd,
    BoxOffice: boxOffice,
    Production: production,
    Website: website,
    Response: response,
  } = movieDetail;

  const movieProperties = {
    released,
    writer,
    director,
    actors,
    language,
    country,
    awards,
    type,
    dvd,
    boxOffice,
    production,
    website,
    response,
  };

  let splittedGenre;
  if (genre) {
    if (genre.includes(",")) {
      splittedGenre = genre.split(",");
    } else {
      splittedGenre = [genre];
    }
  } else {
    splittedGenre = [];
  }

  const titleComponent = (
    <Row>
      <h1>
        {title} <FavoriteIcon />
      </h1>
    </Row>
  );

  const basicInformationComponent = (
    <Row>
      <Col>
        <p>
          {year} - {rated} - {runtime}
        </p>
      </Col>
      <Col>
        <Row>
          <Col>
            <Row>
              <p className="m-0">
                IMDB rating: <Badge>{imdbRating}</Badge>
              </p>
            </Row>
            <Row>
              <small className="m-0">{imdbVotes} hlasov</small>
            </Row>
          </Col>
          <Col>
            <p>
              Metascore: <Badge>{metascore}</Badge>
            </p>
          </Col>
          <Col>
            <p>
              IMDB id: <Badge bg="secondary">{imdbId}</Badge>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  const imageComponent = (
    <Row>
      <Figure>
        <Figure.Image width={228} height={338} alt="171x180" src={poster} />
      </Figure>
    </Row>
  );

  const genreComponent = (
    <Row>
      <p>
        {splittedGenre.map((el) => (
          <Badge style={{ margin: "0.2rem" }}>{el.trim()}</Badge>
        ))}
      </p>
    </Row>
  );

  const plotComponent = (
    <Row>
      <p>{plot}</p>
    </Row>
  );

  const additionalInformationComponent = (
    <Fragment>
      {Object.entries(movieProperties).map(([key, value]) => (
        <Row>
          <p>
            <b>{`${key[0].toUpperCase()}${key.substring(1)}`}:</b> {value}
          </p>
        </Row>
      ))}
    </Fragment>
  );

  const reviewsComponent = (
    <Fragment>
      {ratings && (
        <Row>
          {ratings.map((rating) => (
            <Review from={rating.Source} value={rating.Value} />
          ))}
        </Row>
      )}
    </Fragment>
  );

  return (
    <Fragment>
      {titleComponent}
      {basicInformationComponent}
      {imageComponent}
      {genreComponent}
      {plotComponent}
      {additionalInformationComponent}
      {reviewsComponent}
    </Fragment>
  );
};

export default Detail;
