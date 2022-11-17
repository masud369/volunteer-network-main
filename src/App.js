import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import NoPage from './Components/NoPage/NoPage';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Addevents from './Components/Addevent/Addevents';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Routes > 
            <Route path='/' element={<Home/>} /> 
            <Route path='/home' element={<Home/>} /> 
            <Route path='/addevents' element={<Addevents/>} /> 
             
             <Route path='/*' element={<NoPage/>} /> 
           
          </Routes >
        </Router>
    </div>
  );
}

export default App;
