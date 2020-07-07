import React from 'react'

const Result = (props) => {
  const {bmi, weightRange} = props
  return (
    <div>
      <p>BMI: {bmi}</p>
      <p>You are in the {weightRange} range</p>
    </div>
  )
}

export default Result