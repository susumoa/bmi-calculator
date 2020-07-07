import React from 'react'
import { Chart } from "react-google-charts";
import ageGroup from '../helpers/helper'

const BMIChart = (props) => {
  const {age, weightRange} = props

  const options = {
    title: "Weight ranges among age groups",
    hAxis: { title: "Weight Range"},
    vAxis: { title: ageGroup(age)[0][1]},
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
        legendToggle
      />
    </div>
  )
}

export default BMIChart