//import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup"
import Main from "./components/Main"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/sign-up' element={<Signup/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
