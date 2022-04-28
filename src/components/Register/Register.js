import { useState } from 'react';
import './Register.css';
import FormHeader from '../Form/FormHeader/FormHeader';
import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import SignNav from "../Form/SignNav/SignNav";
import SubmitButton from "../Form/SubmitButton/SubmitButton";

function Register() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitPossible, setSubmitPossible] = useState(true);

  function handleChange() {

  }

  function handleSignUp() {

  }

  return (
    <section className='register'>
      <FormHeader title='Добро пожаловать!'/>
      <Form onSubmit={handleSignUp}>
        <div>
          <Input
            name='name'
            label='Имя'
            type='text'
            autoComplete='username'
            value={values.name || ''}
            onChange={handleChange}
            errors={errors.name}
            placeholder='Джон Смит'
          />
          <Input
            name='email'
            label='E-mail'
            type='email'
            autoComplete='email'
            value={values.email || ''}
            onChange={handleChange}
            errors={errors.email}
            placeholder='johnsmith@mail.com'
          />
          <Input
            name='password'
            label='Пароль'
            type='password'
            autoComplete='new-password'
            value={values.password || ''}
            onChange={handleChange}
            errors={errors.password}
            placeholder='Супер надежный пароль'
          />
        </div>
        <SubmitButton
          submitPossible={submitPossible}
          label='Зарегистрироваться'
        />
      </Form>
      <SignNav label='Уже зарегистрированы?' link='Войти' to='/signin' />
    </section>
  )
}

export default Register;
