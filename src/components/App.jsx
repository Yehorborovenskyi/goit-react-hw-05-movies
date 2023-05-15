import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const Home = lazy(() => import('../pages/Home/Home'))
const Movies = lazy(() => import('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Cast = lazy(() => import('./cast/Cast'))
const Reviews = lazy(() => import('./reviews/Reviews'))



 const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>

  );
};
export default App