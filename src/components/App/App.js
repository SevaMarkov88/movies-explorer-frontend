import { Route, Switch, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import validate from '../../utils/FormValidation';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

function App() {
  const history = useHistory();
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    {name: 'John', email: 'johnsmith@mail.com'}
  );

  function signIn() {

  }

  function signUp() {

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Header
            isNavigation={isLogged}
          />
          <Main/>
          <Footer/>
        </Route>

        <Route path='/signin'>
          <Login
            initialValues={currentUser || {}}
            validate={validate}
            signIn={signIn}
          />
        </Route>

        <Route path='/signup'>
          <Register
            validate={validate}
            signUp={signUp}
          />
        </Route>
        <Route>
          <Header
            isNavigation={!isLogged}
          />
          <Profile/>
        </Route>
      </Switch>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
