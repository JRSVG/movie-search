import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation";

const Layout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const _favoriteMovieIds = JSON.parse(
      localStorage.getItem("favoriteMovieIds")
    );
    dispatch({
      type: "SET_USERS_FAVORITE_MOVIE_IDS",
      payload: { ids: _favoriteMovieIds ? _favoriteMovieIds : [] },
    });
  }, []);

  return (
    <Fragment>
      <Navigation />
      <Container>
        <main>{props.children}</main>
      </Container>
    </Fragment>
  );
};

export default Layout;
