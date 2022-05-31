import FormHeader from '../Form/FormHeader/FormHeader';
import Input from '../Form/Input/Input';
import SubmitButton from '../Form/SubmitButton/SubmitButton';
import Form from '../Form/Form';
import SignNav from '../Form/SignNav/SignNav';
import { useState } from 'react';
import './Login.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitPossible, setSubmitPossible] = useState(true);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
      setPassword(e.target.value);
  }

  function handleSubmit(e) {
      e.preventDefault();
      props.handleSignIn(password, email)
  }

  return (
    <section className='login'>
      <FormHeader title='Рады видеть!' />
      <Form onSubmit={handleSubmit}>
        <div>
          <Input
            name='email'
            label='E-mail'
            type='email'
            autoComplete='username'
            value={email || ''}
            onChange={handleEmailChange}
            errors={errors.email}
            placeholder='johnsmith@mail.com'
          />
          <Input
            name='password'
            label='Пароль'
            type='password'
            autoComplete='current-password'
            value={password || ''}
            onChange={handlePasswordChange}
            errors={errors.password}
            placeholder='Супер надежный пароль'
          />
        </div>
        <SubmitButton submitPossible={submitPossible} label='Войти' />
      </Form>
      <SignNav
        label='Ещё не зарегистрированы?'
        link='Регистрация'
        to='/signup'
      />
    </section>
  );
}

export default Login;
