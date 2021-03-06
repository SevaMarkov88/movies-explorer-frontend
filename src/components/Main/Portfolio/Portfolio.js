import './Portfolio.css';

function Portfolio() {
  return (
    <article className='portfolio'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <a
        className='portfolio__link'
        target='_blank'
        rel='noreferrer'
        href='https://sevamarkov88.github.io/how-to-learn/'>
        Статичный сайт <span className='portfolio__arrow'> &#8599; </span>
      </a>
      <hr className='portfolio__line' />
      <a
        className='portfolio__link'
        target='_blank'
        rel='noreferrer'
        href='https://sevamarkov88.github.io/russian-travel/'>
        Адаптивный сайт <span className='portfolio__arrow'> &#8599; </span>
      </a>
      <hr className='portfolio__line' />
      <a
        className='portfolio__link'
        target='_blank'
        rel='noreferrer'
        href='https://mesto.markov.nomoredomains.work/'>
        Одностраничное приложение{' '}
        <span className='portfolio__arrow'> &#8599; </span>
      </a>
    </article>
  );
}

export default Portfolio;
