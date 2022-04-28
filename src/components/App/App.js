import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import AboutMe from "../Main/AboutMe/AboutMe";
import Techs from '../Main/Techs/Techs';

function App() {
  const history = useHistory();

  return (
    <div className='app'>
      <Techs/>
    </div>
  );
}

export default App;
