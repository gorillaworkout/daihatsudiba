// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home'
import Spec from './Pages/Specification/Spec'
import Header from './Pages/Header/header'
import {Switch,Route} from 'react-router-dom'
// import initFontAwesome from "./Helpers/iniFontAwesome";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  // initFontAwesome();

  return (
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/Specification/:stringify_dp' component={Spec}/>
      <Route exact path='/header' component={Header}/>
    </Switch>
  );
}

export default App;
