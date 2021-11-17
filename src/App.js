// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home'
import Spec from './Pages/Specification/Spec'
import Header from './Pages/Header/header'
import Detail_event from './Pages/event/isi_event'
import Event from './Pages/event/event'
import {Switch,Route} from 'react-router-dom'
import Contact from './Pages/contact/contact.jsx'
// import initFontAwesome from "./Helpers/iniFontAwesome";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  // initFontAwesome();

  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Specification/:stringify_dp' component={Spec}/>
      <Route exact path='/header' component={Header}/>
      <Route exact path='/promo' component={Event} />
      <Route exact path='/detail_event/:detail' component={Detail_event} />
      <Route exact path='/contact' component={Contact}/>
    </Switch>
  );
}

export default App;
