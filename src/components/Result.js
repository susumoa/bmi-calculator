import React from 'react'
import './Result.css'

const Result = (props) => {
  const {bmi, weightRange} = props
  return (
    <div>
      <p>BMI: {bmi}</p>
      <p>You are in the <span className='weight-range'>{weightRange} range</span></p>
    </div>
  )
}

export default Result