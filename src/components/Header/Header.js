import './Header.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import SignButtons from './SignButtons/SignButtons';
import Navigation from './Navigation/Navigation';

function Header(props) {
  return (
    <header className={`header ${props.isNavigation && 'header_background-none'}`}>
      <NavLink to='/' className='header__home'>
        <Logo className='header__logo' />
      </NavLink>
      {props.isNavigation && <Navigation />}
      {!props.isNavigation && <SignButtons />}
    </header>
  );
}

export default Header;
