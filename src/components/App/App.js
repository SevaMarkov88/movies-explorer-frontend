import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  const history = useHistory();

  return (
    <div className='app'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
