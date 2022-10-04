import Number from './components/Number';
import ResultBar from './components/ResultBar';
import { useState } from 'react';
import './App.css';

const numbers = ["1","2","3","4","5","6","7","8","9","0"];
const operators =["*","+","-","/"];

function App(){

  const[result, setResult] = useState(0);
  const[value, setValue] = useState("");


  const handleClick = (e) =>{
    setValue(value + e.target.id);
  }

  const showResult = () =>{

    let resultado = [];
    let resultadoInt = [];
    let total = 0;

    if(value.includes("+")){
      resultado = (value.split("+"));
      resultado.forEach(item =>{
        resultadoInt.push(parseInt(item));
      })
      total = resultadoInt.reduce((a,b) => a + b, 0);
      setResult(total);
    }else if(value.includes("*")){
      resultado = (value.split("*"));
      resultado.forEach(item =>{
        resultadoInt.push(parseInt(item));
      })
      //total = resultadoInt.reduce((a,b) => a * b, 0);
      setResult(resultadoInt[0]*resultadoInt[1]);
    }
    
  }



  return (
    <div className="App container">
      <div className='row mt-5'>
        <div className="calculator col-12 offset-lg-4 col-lg-4 px-4 py-4">
         <ResultBar value={ result ? result : value}/>
          <div className='row'>

            <div className='col-9'>
              <div className='row justify-content-center'>
              {
              numbers.map(number => (
                <div className='col-4 mb-3'>
                  <Number 
                  key={number *2} 
                  data={number} 
                  color="gray"
                  onClick={handleClick} />
                </div>
              ))
              }
              </div>
            </div>
          
            <div className='col-3' >
              <div className='row'>
              {
                operators.map(operator =>(
                  <div className='col-12 mb-3'>
                    <Number 
                    key={operator*3}
                    data={operator} 
                    color="blue"
                    onClick={handleClick}/>
                  </div>
                ))
              }
              <button onClick={showResult} className='btn btn-primary'>=</button>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
