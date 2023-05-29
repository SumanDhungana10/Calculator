import React,{useState} from 'react'
import './App.css'

function App() {
  const [result,setResult]=useState("");
  const handelClick =(e)=>
  {
    setResult(result.concat(e.target.name));
  }
  const clear =()=>
  {
    setResult("");
  }
  const backspace=()=>
  {
    setResult(result.slice(0,result.length -1));

  }
  const calculate=()=>
  {
    try{
    setResult(eval(result).toString());
     }
      catch(err)
      {
        setResult("Error")
      }
  }
 return(
  <>
  <div className="contaner">
    <form>
  <input type='text' value={result}/>
  </form>
  <div className="keypad">
    <button className='clear' onClick={clear} id='clear'>Clear</button>
    <button className='backspace' onClick={backspace} id='backspace'>C</button>
    <button name='/' onClick={handelClick} className='operation'>&divide;</button>
    <button name='7' onClick={handelClick}>7</button>
    <button name='8' onClick={handelClick}>8</button>
    <button name='9' onClick={handelClick}>9</button>
    <button name='*' onClick={handelClick} className='operation'>&times;</button>
    <button name='4' onClick={handelClick}>4</button>
    <button name='5' onClick={handelClick}>5</button>
    <button name='6' onClick={handelClick}>6</button>
    <button name='-' onClick={handelClick} className='operation'>&ndash;</button>
    <button name='1' onClick={handelClick}>1</button>
    <button name='2' onClick={handelClick}>2</button>
    <button name='3' onClick={handelClick}>3</button>
    <button name='+' onClick={handelClick} className='operation'>+</button>
    <button name='0' onClick={handelClick}>0</button>
    <button name='.' onClick={handelClick}>.</button>
    <button className='result' onClick={calculate} id='result'>=</button>
  </div>
  </div>
  </>
 )
}

export default App
