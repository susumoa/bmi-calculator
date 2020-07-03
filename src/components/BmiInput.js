import React, {useState} from 'react'

const BmiInput = () => {
  const [measurements, setMeasurements] = useState({
    date: '',
    height: '',
    weight: '',
    age: ''
  })
  
  const [bmi, setBmi] = useState('')
  
  const {date, height, weight, age} = measurements
  
  const onChange = event => {
    const {name, value} = event.target
    setMeasurements(prevMeasurements => {
      return {...prevMeasurements,
      [name]: value}
    })
  }
  
  const calculateBmi = event => {
    event.preventDefault()
    if (height === '' || weight === '' || date === '') {
      alert('Please fill out everything')
    } else {
      console.log('clicked')
      setBmi((weight / ((height / 100) * (height / 100))).toFixed(1))
      setMeasurements({
        height: '',
        weight: '',
        date: '',
        age: ''
      })
    }
  }

  return (
    <div>
      <h1>Daily measurements</h1>
      <form>
        <input required type='date' value={date} onChange={onChange} name='date' />
        <br />
        <br />
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
      {bmi !== '' && <p>BMI: {bmi}</p>}
    </div>
  )
}

export default BmiInput