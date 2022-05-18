import './SearchForm.css';

function SearchForm() {


  return (
    <form className='search-form'>
      <fieldset className='search-form__search'>
        <input
          className='search-form__input'
          placeholder='Фильм'
          type='search'
        />

        <button
          type='submit'
          className='search-form__button'>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="34" height="34" rx="17" fill="#2BE080"/>
          <path d="M15 23L20 17L15 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>
      </fieldset>

      <label className='filter-checkbox'>
        <input
          className='filter-checkbox__default'
          type='checkbox'
        />
        <span className='filter-checkbox__label'>Короткометражки</span>
        <span className='filter-checkbox__slider' />
      </label>
    </form>
  );
}

export default SearchForm;
