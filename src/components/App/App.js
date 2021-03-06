import { Route, Switch } from 'react-router-dom';
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
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    {name: 'John', email: 'johnsmith@mail.com'}
  );

  const movies = [{
    nameRU: 'filmNameRu',
    duration: '2 hours',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543',
    trailerUrl: 'https://www.youtube.com',
    _id: 1
  }];

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

        <Route path='/profile'>
          <Header
            isNavigation={!isLogged}
          />
          <Profile/>
        </Route>

        <ProtectedRoute path='/movies'>
          <Header
            isNavigation={!isLogged}
          />
          <Movies
            movies={movies}
          />
          <Footer/>
        </ProtectedRoute>

        <ProtectedRoute path='/saved-movies'>
          <Header
            isNavigation={!isLogged}
          />
          <SavedMovies
            movies={movies}
          />
          <Footer/>
        </ProtectedRoute>
      </Switch>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
