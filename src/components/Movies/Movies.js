import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import {useEffect, useState} from "react";

function Movies(props) {
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

export default Movies;
