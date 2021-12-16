import React, { useState } from "react";
import {
  Navbar,
  Button,
  Container,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navigation = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const favoriteMovieIds = useSelector((state) => state.user.favoriteMovieIds);

  const setSearchedQuery = (event) => {
    event.preventDefault();
    navigate("/");
    dispatch({ type: "SET_SEARCHED_QUERY", payload: { query: query } });
    dispatch({ type: "FETCH_MOVIES", payload: { query, page: 1 } });
  };

  console.log('process.env.PUBLIC_URL: ', process.env.PUBLIC_URL);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href='/'>Domov</Link>
            <Link href='/oblubene'>Obľúbené ({favoriteMovieIds.length})</Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex" style={{ maxWidth: "230px" }}>
          <FormControl
            type="search"
            placeholder="Hľadať (napr. Batman)"
            className="me-2"
            aria-label="Search"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button
            type="submit"
            onClick={setSearchedQuery}
            variant="outline-success"
          >
            Hľadať
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Navigation;
