import FormHeader from '../Form/FormHeader/FormHeader';
import Input from '../Form/Input/Input';
import SubmitButton from '../Form/SubmitButton/SubmitButton';
import Form from '../Form/Form';
import SignNav from '../Form/SignNav/SignNav';
import { useState } from 'react';
import './Login.css';

function Login(props) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitPossible, setSubmitPossible] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    const { [name]: removedError, ...rest } = errors;
    const error = props.validate[name](value);
    setErrors({
      ...rest,
      ...(error && { [name]: values[name] && error }),
    });
  }

  function handleSignIn(e) {
    e.preventDefault();
    const { email, password } = values;
    props.signIn(email, password);
  }

  return (
    <section className='login'>
      <FormHeader title='Рады видеть!' />
      <Form onSubmit={handleSignIn}>
        <div>
          <Input
            name='email'
            label='E-mail'
            type='email'
            autoComplete='username'
            value={values.email || ''}
            onChange={handleChange}
            errors={errors.email}
            placeholder='johnsmith@mail.com'
          />
          <Input
            name='password'
            label='Пароль'
            type='password'
            autoComplete='current-password'
            value={values.password || ''}
            onChange={handleChange}
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
