import { Route, Switch } from 'react-router-dom';
import {useEffect, useState} from 'react';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import validate from '../../utils/FormValidation';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    {name: 'John', email: 'johnsmith@mail.com'}
  );
  const [movies, setMovies] = useState([])

  useEffect(() => {
    moviesApi.getMovies()
        .then((data) => setMovies(data))
        .catch((err) => console.log(err))
  })

  function handleSignIn() {

  }

  function handleSignUp() {

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
            handleSignIn={handleSignIn}
          />
        </Route>

        <Route path='/signup'>
          <Register
            validate={validate}
            handleSignUp={handleSignUp}
          />
        </Route>

        <Route path='/profile'>
          <Header
            isNavigation={!isLogged}
          />
          <Profile/>
        </Route>

        <Route path='/movies'>
          <Header
            isNavigation={!isLogged}
          />
          <Movies
            movies={movies}
          />
          <Footer/>
        </Route>

        <Route path='/saved-movies'>
          <Header
            isNavigation={!isLogged}
          />
          <SavedMovies
            movies={movies}
          />
          <Footer/>
        </Route>
      </Switch>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
