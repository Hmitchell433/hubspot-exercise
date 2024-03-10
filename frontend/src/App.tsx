import Container from "components/Container";
import Filters from "components/Filters";
import MovieList from "components/MovieList";
import MovieContextProvider from "context/MovieContext";

import "react-toastify/dist/ReactToastify.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./App.css";

const App = () => {
  return (
    <MovieContextProvider>
      <Container>
        <Filters />
        <MovieList />
      </Container>
    </MovieContextProvider>
  );
};

export default App;
