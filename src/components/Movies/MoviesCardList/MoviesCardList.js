import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {useState} from "react";

function MoviesCardList(props) {
  const [isCardSaved, setCardSaved] = useState(false);

  return (
    <section className='movies-card-list'>
      {props.movies.map((item, index) => {
        return (
          <MoviesCard
            movie={item}
            isSaved={isCardSaved}
            movieIndex={index}
            key={item._id}
          />
        )})}
        <button className='movies-card-list__more'>
          Ещё
        </button>
    </section>
  );
}

export default MoviesCardList;
