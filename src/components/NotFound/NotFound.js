import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const history = useHistory();

  function goToPreviousPath() {
    history.goBack();
  }

  return (
    <section className='not-found'>
      <div className='not-found__heading'>
        <h1 className='not-found__number'>404</h1>
        <p className='not-found__caption'>Страница не найдена</p>
      </div>
      <button className='not-found__go-back' to='/' onClick={goToPreviousPath}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;
