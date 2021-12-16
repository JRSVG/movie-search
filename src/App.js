import { Route, Routes } from "react-router-dom";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Layout from "./components/Layout";
import Homepage from "./pages/homepage";
import FavoriteMovies from "./pages/favorite-movies";
import MovieDetail from "./pages/detail-page";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/oblubene" element={<FavoriteMovies />} />
          <Route path="/filmy/:movieId" element={<MovieDetail />} />
        </Routes>
      </Layout>
  );
}

export default App;
