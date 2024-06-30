import TextField from '@mui/material/TextField';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principleAmount, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const validate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    // console.log(!!value.match(/^[0-9]*$/));
    if(!!value.match(/^[0-9]*$/)) {
      if(name == 'principle') {
        setIsPrinciple(true)
        setPrinciple(value);
      }else if(name == 'rate') {
        setIsRate(true)
        setRate(value);
      }else if(name == 'year') {
        setYear(value);
        setIsYear(true)
      }
    } else {
        if(name == 'principle') {
          setPrinciple(value)
          setIsPrinciple(false);
        }else if(name == 'rate') {
          setRate(value)
          setIsRate(false);
        }else if(name == 'year') {
          setYear(value)
          setIsYear(false);
        }
    }

  }

  const handleReset = () => {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if(principleAmount == '' || rate == '' || year == '') {
      alert('Please fill the form completely')
    }else {
      setInterest((principleAmount * rate * year)/100)
    }
  }

  return (
    <>
     <div style={{backgroundColor: 'black', height: '100vh'}} className='d-flex justify-content-center align-items-center'>
      <div style={{backgroundColor: 'white', width: '500px'}} className='p-4 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest Easily</p>
        <div style={{height: '150px', backgroundColor: 'orange'}} className ='p-3 mt-5 rounded shadow d-flex justify-content-center align-items-center flex-column'>
          <h1 className='fw-bold'>₹ {interest}</h1>
          <p>Total simple interest</p>
          
        </div>
        <form  className='mt-4'onSubmit={handleCalculate} >
            <div className="mb-3">
              <TextField id="outlined-basic" label="₹ Principle amount" variant="outlined" value={principleAmount || ''} className='w-100' onChange={(e) => validate(e)} name='principle' />
            </div>
           { 
           !isPrinciple &&
            <p className='text-danger'>*Invalid Input</p>
            }

            <div className="mb-3">
              <TextField id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" value={rate || ''} className='w-100' onChange={(e) => validate(e)} name='rate' />
            </div>
            { 
           !isRate &&
            <p className='text-danger'>*Invalid Input</p>
            }

            <div className="mb-3">
              <TextField id="outlined-basic" label="Year (Yr)" variant="outlined" value={year || ''} className='w-100' onChange={(e) => validate(e)} name='year' />
            </div>
            { 
           !isYear &&
            <p className='text-danger'>*Invalid Input</p>
            }

            <div className="mb-3 d-flex justify-content-between">
              <Button variant="contained" color='success' style={{width: '190px', padding: '15px'}} disabled={isPrinciple && isRate && isYear? false: true} type='submit' >Calculate</Button>

              <Button variant="outlined" color='primary' style={{width: '190px', padding: '15px'}} onClick={handleReset} >Reset</Button>
            </div>

          </form>

      </div>

     </div>
    
    </>
  )
}

export default App
