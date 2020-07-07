import React from 'react'
import { Chart } from "react-google-charts";
import ageGroup from '../helpers/helper'

const BMIChart = (props) => {
  const {age, weightRange} = props
  console.log('Age: ', age)
  console.log(ageGroup(age))
  return (
    <div>
      <p>{age}</p>
    </div>
  )
}

export default BMIChart