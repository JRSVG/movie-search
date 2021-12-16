import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Detail from "../../components/Detail";

const DetailPage = (props) => {
  const params = useParams();
  const { movieId } = params;
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.search.movieDetail);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIE_DETAIL", payload: { id: movieId } });
  }, [movieId]);


  return (
    <Fragment>
      <Detail movieDetail={movieDetail} />
    </Fragment>
  );
};

export default DetailPage;
