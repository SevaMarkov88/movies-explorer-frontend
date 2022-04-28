import { NavLink } from 'react-router-dom';
import './SignNav.css';

function SignNav(props) {
  return (
    <nav className='sign-nav'>
      <p className='sign-nav__label'>{props.label}</p>
      <NavLink className='sign-nav__link' to={props.to}>
        {props.link}
      </NavLink>
    </nav>
  );
}

export default SignNav;
