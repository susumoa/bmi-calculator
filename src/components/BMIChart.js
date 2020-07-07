import React from 'react'
import { Chart } from "react-google-charts";
import {ageGroup} from '../helpers/helper'

const BMIChart = (props) => {
  const {age, weightRange} = props
  return (
    <div>
      {ageGroup(age)}
    </div>
  )
}

export default BMIChart