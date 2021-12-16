import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/List";
import classes from './index.module.css'

const Homepage = (props) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const query = useSelector((state) => state.search.query);
  const movies = useSelector((state) => state.search.movies);
  const moviesCount = useSelector((state) => state.search.moviesCount);

  useEffect(() => {
    function cleanupQuery() {
      dispatch({
        type: "SET_SEARCHED_QUERY",
        payload: { query: "" },
      });
    };
    return cleanupQuery;
  }, []);

  const nextPageHandler = () => {
    dispatch({ type: "FETCH_MOVIES", payload: { query, page: page + 1 } });
    setPage(page + 1);
  };

  return (
    <Fragment>
      {!query && (
        <div className={classes.title}>
          <h2>Vyhľadávajte najlepšie filmy</h2>
          <p>Začnite zadaním vyhľadávaného názvu filmu do okienka vyššie.</p>
        </div>
      )}
      {query && (
        <List
          movies={movies}
          moviesCount={moviesCount}
          page={page}
          nextPageHandler={nextPageHandler}
        />
      )}
    </Fragment>
  );
};

export default Homepage;
