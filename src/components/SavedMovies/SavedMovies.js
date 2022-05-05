import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import {useEffect, useState} from "react";

function SavedMovies(props) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(setLoading(false),10000)
  });

  return (
    <section>
      <SearchForm/>
      {isLoading && <Preloader />}
      <MoviesCardList
        movies={props.movies}
      />
    </section>
  );
}

export default SavedMovies;
