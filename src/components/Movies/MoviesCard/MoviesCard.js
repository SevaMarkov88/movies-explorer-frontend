import './MoviesCard.css';
import {useEffect} from "react";

function MoviesCard(props) {
  function movieDelete() {

  }

  function movieSave() {

  }

  return (
    <figure className='movie-card'>
      <a
        className='movie-card__link'
        href={props.movie.trailerUrl}
        target='_blank'
        rel='noreferrer'>
        <img
          src={props.movie.imageUrl}
          alt={props.movie.nameRU ? props.movie.nameRU : 'Фильм без названия'}
          className='movie-card__image'
        />
      </a>

      <figcaption className='movie-card__caption'>
        <div className='movie-card__text-block'>
          <p className='movie-card__title'>
            {props.movie.nameRU ? props.movie.nameRU : 'Фильм без названия'}
          </p>
          <p className='movie-card__duration'>{props.movie.duration}</p>
        </div>
        {props.isSaved ?
          (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_13056_3579)">
          <circle cx="14" cy="11" r="8" fill="#2BE080"/>
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14 17C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5C10.6863 5 8 7.68629 8 11C8 14.3137 10.6863 17 14 17ZM14 19C18.4183 19 22 15.4183 22 11C22 6.58172 18.4183 3 14 3C9.58172 3 6 6.58172 6 11C6 15.4183 9.58172 19 14 19Z"
              fill="white"/>
        <defs>
          <filter id="filter0_d_13056_3579" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                           result="hardAlpha"/>
            <feOffset dy="3"/>
            <feGaussianBlur stdDeviation="3"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13056_3579"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13056_3579" result="shape"/>
          </filter>
        </defs>
      </svg>)
          :
          (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_13056_3582)">
          <rect x="6" y="3" width="16" height="16" rx="8" fill="#F9F9F9"/>
          </g>
          <path fill-rule="evenodd" clip-rule="evenodd"
          d="M14 17C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5C10.6863 5 8 7.68629 8 11C8 14.3137 10.6863 17 14 17ZM14 19C18.4183 19 22 15.4183 22 11C22 6.58172 18.4183 3 14 3C9.58172 3 6 6.58172 6 11C6 15.4183 9.58172 19 14 19Z"
          fill="white"/>
          <defs>
          <filter id="filter0_d_13056_3582" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"/>
          <feOffset dy="3"/>
          <feGaussianBlur stdDeviation="3"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13056_3582"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13056_3582" result="shape"/>
          </filter>
          </defs>
          </svg>)
        }

      </figcaption>
    </figure>
  );
}

export default MoviesCard;
