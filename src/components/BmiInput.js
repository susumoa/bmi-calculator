import React, {useState} from 'react'
import Result from './Result'
import Chart from './Chart'

const BmiInput = () => {
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: '',
    age: ''
  })
  
  const [bmi, setBmi] = useState('')
  
  const {height, weight, age} = measurements
  
  const onChange = event => {
    const {name, value} = event.target
    setMeasurements(prevMeasurements => {
      return {...prevMeasurements,
      [name]: value}
    })
  }

  const getWeightRange = index => {
    if (index < 18.5) {
      return 'Underweight'
    } else if (index >= 18.5 && index < 25) {
      return 'Healthy Weight'
    } else if (index >= 25 && index < 30) {
      return 'Overweight'
    } else if (index >= 30) {
      return 'Obese'
    } else {
      return 'Error'
    }
  }

// BMI weight ranges
// Less than 18.5 = Underweight
// Between 18.5 - 24.9 = Healthy Weight
// Between 25 - 29.9 = Overweight
// Over 30 = Obese

  const calculateBmi = event => {
    event.preventDefault()
    if (height === '' || weight === '') {
      alert('Please fill out everything')
    } else {
      console.log('clicked')
      setBmi((weight / ((height / 100) * (height / 100))).toFixed(1))
      setMeasurements({
        height: '',
        weight: '',
        age: ''
      })
    }
  }

  const weightRange = getWeightRange(bmi)

  return (
    <div>
      <h1>Daily measurements</h1>
      <form>
        <input required type='number' min='0' placeholder='height' value={height} onChange={onChange} name='height' />
        <span>cm</span>
        <br />
        <br />
        <input required type='number' min='0' placeholder='weight' value={weight} onChange={onChange} name='weight' />
        <span>kg</span>
        <br />
        <br />
        
        <input required type='number' min='0' placeholder='age' value={age} onChange={onChange} name='age' />
        <br />
        <br />
        <button onClick={calculateBmi}>Calculate</button>
      </form>
      {bmi !== '' && <div>
        <Result bmi={bmi} weightRange={weightRange} />
        <Chart age={age} weightRange={weightRange} />
      </div>}
    </div>
  )
}

export default BmiInput