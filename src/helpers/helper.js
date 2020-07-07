// age group 16-24
const group1624 = [
  ['Weight Range', 'Rates among age 16-24'],
  ['Underweight', 5],
  ['Normal', 57],
  ['Overweight', 22],
  ['Obese', 16]
]

// age group 25-34
const group2534 = [
  ['Weight Range', 'Rates among age 25-34'],
  ['Underweight', 2],
  ['Normal', 41],
  ['Overweight', 34],
  ['Obese', 23]
]

// age group 35-44
const group3544 = [
  ['Weight Range', 'Rates among age 35-44'],
  ['Underweight', 1],
  ['Normal', 33],
  ['Overweight', 37],
  ['Obese', 29]
]

// age group 45-54
const group4554 = [
  ['Weight Range', 'Rates among age 45-54'],
  ['Underweight', 1],
  ['Normal', 27],
  ['Overweight', 36],
  ['Obese', 36]
]

// age group 55-64
const group5564 = [
  ['Weight Range', 'Rates among age 55-64'],
  ['Underweight', 0],
  ['Normal', 27],
  ['Overweight', 39],
  ['Obese', 34]
]

// age group 65-74
const group6574 = [
  ['Weight Range', 'Rates among age 65-74'],
  ['Underweight', 1],
  ['Normal', 24],
  ['Overweight', 43],
  ['Obese', 32]
]

// age group 75+
const group75 = [
  ['Weight Range', 'Rates among age 75+'],
  ['Underweight', 1],
  ['Normal', 27],
  ['Overweight', 41],
  ['Obese', 31]
]

// total
const total = [
  ['Weight Range', 'Rates among all ages'],
  ['Underweight', 2],
  ['Normal', 34],
  ['Overweight', 36],
  ['Obese', 28]
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
    return group75
  } else if (age >= 75) {
    return group4554
  } else {
    return total
  }
}

export default ageGroup