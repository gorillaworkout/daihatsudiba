import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home'
import {Switch,Route} from 'react-router-dom'
// import initFontAwesome from "./Helpers/iniFontAwesome";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  // initFontAwesome();

  return (
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  );
}

export default App;
