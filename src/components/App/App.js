import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Main from "../Main/Main";

function App() {
  const history = useHistory();

  return (
    <div className='app'>
      <Main/>
    </div>
  );
}

export default App;
