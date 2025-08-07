import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const[number,setnumber]=useState(0)
  const[presentColor,setpresentColor]=useState("green")

  function increment(){
    setnumber(number+1)

  }
  function decrement(){
    setnumber(number-1)
  }
  function changeColor(){
    if (presentColor=="red"){
      setpresentColor("green")
    } 
    if (presentColor=="green"){
      setpresentColor("red")
    } 
    
  }
  return (
    <div className="App">
    <button onClick={decrement}>
      -
    </button>
    <div style= {{color:presentColor}}>{number}</div>
    <button onClick={increment}> 
    +
    </button>
    <div><button onClick={changeColor}>  changeColor </button></div>
     
    </div>
  );
}

export default App;
