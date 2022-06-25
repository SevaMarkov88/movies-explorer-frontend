import { Route, Switch, useHistory } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import validate from "../../utils/FormValidation";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { authApi } from "../../utils/AuthApi";
import { mainApi } from "../../utils/MainApi";
import moviesApi from "../../utils/MovieApi";
import { useEffect } from "react";

function App() {
  const history = useHistory();
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );

  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || null
  );

  useEffect(() => {
    moviesApi.getMovies((data) => localStorage.setItem("movies", data));
  }, []);

  function signIn(password, email) {
    authApi
      .authorize(password, email)
      .then((data) => {
        localStorage.setItem("userData", data.user);
        localStorage.setItem("token", data.token);
        mainApi.getUserInfo((data) => setCurrentUser(data));
        history.push("/movies");
      })
      .catch((err) => console.log(err));
  }

  function signUp(name, password, email) {
    authApi
      .register(name, password, email)
      .then(() => {
        signIn(password, email);
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header isNavigation={isLogged} />
            <Main />
            <Footer />
          </Route>

          <Route path="/signin">
            <Login
              initialValues={currentUser || {}}
              validate={validate}
              signIn={signIn}
            />
          </Route>

          <Route path="/signup">
            <Register validate={validate} signUp={signUp} />
          </Route>

          <Route path="/profile">
            <Header isNavigation={!isLogged} />
            <Profile />
          </Route>

          <Route path="/movies">
            <Header isNavigation={!isLogged} />
            <Movies movies={movies} />
            <Footer />
          </Route>

          <Route path="/saved-movies">
            <Header isNavigation={!isLogged} />
            <SavedMovies movies={movies} />
            <Footer />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
