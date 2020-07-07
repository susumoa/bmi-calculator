import React from 'react'
import { Chart } from "react-google-charts";
import ageGroup from '../helpers/helper'

const BMIChart = (props) => {
  const {age, weightRange} = props

  const options = {
    title: "Weight ranges among age groups",
    legend: "none"
  }

  const data = ageGroup(age)

  return (
    <div>
    <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
    />
    </div>
  )
}

export default BMIChart