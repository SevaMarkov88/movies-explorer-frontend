import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchInfo from '../Movies/SearchInfo/SearchInfo';

function Movies({
                  search,
                  preloading,
                  filteredMovies,
                  inputKeyString,
                  searchResult,
                  mySavedMovies,
                  handleMovieSave,
                  handleMovieDelete,
                }) {
  return (
    <section>
      <SearchForm search={search} inputKeyString={inputKeyString} />
      {preloading && <Preloader />}
      {filteredMovies && filteredMovies.length > 0 && (
        <MoviesCardList
          place='all-movies'
          moviesToRender={filteredMovies}
          mySavedMovies={mySavedMovies}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
        />
      )}
      {inputKeyString &&
        !preloading &&
        filteredMovies &&
        filteredMovies.length === 0 && <SearchInfo text={searchResult} />}
    </section>
  );
}

export default Movies;
