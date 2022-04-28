import './Profile.css';
import { useContext, useState } from 'react';

function Profile() {
  const currentUser = useContext({});
  const [submitPossible, setSubmitPossible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Smith',
    email: 'johnsmith@mail.com',
  });
  const [errors, setErrors] = useState({});


  function handleChange() {

  }

  function handleSignOut() {

  }

  function handleEditProfile() {

  }

  return (
    <form className='profile' onSubmit={handleEditProfile}>
      <div className='profile__info'>
        <h1 className='profile__heading'>Привет, {userInfo.name}!</h1>
        <div className='profile__unit'>
          <label className='profile__key' htmlFor='profile-name'>
            Имя
          </label>
          <input
            className='profile__value'
            name='name'
            id='profile-name'
            type='text'
            value={userInfo.name || ''}
            onChange={handleChange}
            placeholder={userInfo.name || ''}
          />
        </div>
        {errors.name && <p className='profile__error'>{errors.name}</p>}
        <hr className='profile__line' />
        <div className='profile__unit'>
          <label className='profile__key' htmlFor='profile-email'>
            Почта
          </label>
          <input
            className='profile__value'
            name='email'
            id='profile-email'
            type='email'
            value={userInfo.email || ''}
            onChange={handleChange}
            placeholder={userInfo.email || ''}
          />
        </div>
        {errors.email && <p className='profile__error'>{errors.email}</p>}
      </div>
      <div className='profile__buttons'>
        <button
          type='submit'
          className={`profile__button profile__button_active_${submitPossible}`}
          disabled={!submitPossible}>
          Редактировать
        </button>
        <button
          className='profile__button profile__button_quit'
          onClick={handleSignOut}>
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
}

export default Profile;
