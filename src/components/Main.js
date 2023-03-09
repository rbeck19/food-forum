//import logo from './logo.svg';
//import './App.css';
import {useNavigate} from "react-router-dom"



function Main() {
  const path = useNavigate()

  function Logout(){
    path('/login')
}
  return (
    <div className="App">
     Main
     <button className="signin" onClick={Logout}>Logout</button>
    </div>
  );
}

export default Main
