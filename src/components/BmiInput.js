import React, {useState} from 'react'
import Result from './Result'
import BMIChart from './BMIChart'

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
      return 'Normal'
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
// Between 18.5 - 24.9 = Normal
// Between 25 - 29.9 = Overweight
// Over 30 = Obese

  const calculateBmi = event => {
    event.preventDefault()
    if (height === '' || weight === '') {
      alert('Please fill out everything')
    } else {
      setBmi((weight / ((height / 100) * (height / 100))).toFixed(1))
    }
  }

  const weightRange = getWeightRange(bmi)

  return (
    <div>
      <h1>Calculate your BMI</h1>
      <form>
        <input required type='number' min='0' placeholder='height' value={height} onChange={onChange} name='height' />
        <span>cm</span>
        <br />
        <br />
        <input required type='number' min='0' placeholder='weight' value={weight} onChange={onChange} name='weight' />
        <span>kg</span>
        <br />
        <br />
        <select name='age' onChange={onChange}>
          <option value=''>Select your age group</option>
          <option value='group1624'>16-24</option>
          <option value='group2534'>25-34</option>
          <option value='group3544'>35-44</option>
          <option value='group4554'>45-54</option>
          <option value='group5564'>55-64</option>
          <option value='group6574'>65-74</option>
          <option value='group75'>75+</option>
          <option value='total'>All</option>
        </select>
        <br />
        <br />
        <button onClick={calculateBmi}>Calculate</button>
      </form>
      {bmi !== '' && <div>
        <Result bmi={bmi} weightRange={weightRange} />
        <BMIChart age={age} weightRange={weightRange} />
      </div>}
    </div>
  )
}

export default BmiInput