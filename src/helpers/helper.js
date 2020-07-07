// age group 16-24
const group1624 = [
  ['Weight Range', 'Rates among age 16-24', { role: "style" }],
  ['Underweight', 5, '#a3f7bf'],
  ['Normal', 57, '#a3f7bf'],
  ['Overweight', 22, '#a3f7bf'],
  ['Obese', 16, '#a3f7bf']
]

// age group 25-34
const group2534 = [
  ['Weight Range', 'Rates among age 25-34', { role: "style" }],
  ['Underweight', 2, '#a3f7bf'],
  ['Normal', 41, '#a3f7bf'],
  ['Overweight', 34, '#a3f7bf'],
  ['Obese', 23, '#a3f7bf']
]

// age group 35-44
const group3544 = [
  ['Weight Range', 'Rates among age 35-44', { role: "style" }],
  ['Underweight', 1, '#a3f7bf'],
  ['Normal', 33, '#a3f7bf'],
  ['Overweight', 37, '#a3f7bf'],
  ['Obese', 29, '#a3f7bf']
]

// age group 45-54
const group4554 = [
  ['Weight Range', 'Rates among age 45-54', { role: "style" }],
  ['Underweight', 1, '#a3f7bf'],
  ['Normal', 27, '#a3f7bf'],
  ['Overweight', 36, '#a3f7bf'],
  ['Obese', 36, '#a3f7bf']
]

// age group 55-64
const group5564 = [
  ['Weight Range', 'Rates among age 55-64', { role: "style" }],
  ['Underweight', 0, '#a3f7bf'],
  ['Normal', 27, '#a3f7bf'],
  ['Overweight', 39, '#a3f7bf'],
  ['Obese', 34, '#a3f7bf']
]

// age group 65-74
const group6574 = [
  ['Weight Range', 'Rates among age 65-74', { role: "style" }],
  ['Underweight', 1, '#a3f7bf'],
  ['Normal', 24, '#a3f7bf'],
  ['Overweight', 43, '#a3f7bf'],
  ['Obese', 32, '#a3f7bf']
]

// age group 75+
const group75 = [
  ['Weight Range', 'Rates among age 75+', { role: "style" }],
  ['Underweight', 1, '#a3f7bf'],
  ['Normal', 27, '#a3f7bf'],
  ['Overweight', 41, '#a3f7bf'],
  ['Obese', 31, '#a3f7bf']
]

// total
const total = [
  ['Weight Range', 'Rates among all ages', { role: "style" }],
  ['Underweight', 2, '#a3f7bf'],
  ['Normal', 34, '#a3f7bf'],
  ['Overweight', 36, '#a3f7bf'],
  ['Obese', 28, '#a3f7bf']
]

const ageGroup = age => {
  if (age >= 16 && age < 25) {
    return group1624
  } else if (age >= 25 && age < 35) {
    return group2534
  } else if (age >= 35 && age < 45) {
    return group3544
  } else if (age >= 45 && age < 55) {
    return group4554
  } else if (age >= 55 && age < 65) {
    return group5564
  } else if (age >= 65 && age < 75) {
    return group6574
  } else if (age >= 75) {
    return group75
  } else {
    return total
  }
}

export default ageGroup