import React, { Fragment } from "react";
import ListItem from "../ListItem";
import InfiniteScroll from "../UI/InfiniteScroll";

const List = ({ movies, moviesCount, page, nextPageHandler }) => {

  return (
    <Fragment>
      <p className="mt-1 mb-1">Počet výsledkov: {moviesCount}</p>

      <InfiniteScroll page={page} nextPageHandler={nextPageHandler}>
        {movies.map((movie) => (
          <ListItem
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </InfiniteScroll>
    </Fragment>
  );
};

export default List;
