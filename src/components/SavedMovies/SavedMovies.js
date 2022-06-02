import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchInfo from '../Movies/SearchInfo/SearchInfo';

function SavedMovies({
                       preloading,
                       search,
                       mySavedMovies,
                       filteredMySavedMovies,
                       inputKeyString,
                       searchResult,
                       handleMovieDelete,
                     }) {
  return (
    <section>
      <SearchForm search={search} inputKeyString={inputKeyString} />
      {preloading && <Preloader />}

      {mySavedMovies && mySavedMovies.length > 0 && (
        <MoviesCardList
          place='saved-movies'
          moviesToRender={
            filteredMySavedMovies ? filteredMySavedMovies : mySavedMovies
          }
          handleMovieDelete={handleMovieDelete}
        />
      )}
      {inputKeyString &&
        !preloading &&
        filteredMySavedMovies &&
        filteredMySavedMovies.length === 0 && (
          <SearchInfo text={searchResult} />
        )}
    </section>
  );
}

export default SavedMovies;
