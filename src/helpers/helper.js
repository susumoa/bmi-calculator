// age group 16-24
const group1624 = [
  ['Weight Range', 'Rates among age 16-24'],
  ['underweight', 5],
  ['normal', 57],
  ['overweight', 22],
  ['obese', 16]
]

// age group 25-34
const group2534 = [
  ['Weight Range', 'Rates among age 25-34'],
  ['underweight', 2],
  ['normal', 41],
  ['overweight', 34],
  ['obese', 23]
]

// age group 35-44
const group3544 = [
  ['Weight Range', 'Rates among age 35-44'],
  ['underweight', 1],
  ['normal', 33],
  ['overweight', 37],
  ['obese', 29]
]

// age group 45-54
const group4554 = [
  ['Weight Range', 'Rates among age 45-54'],
  ['underweight', 1],
  ['normal', 27],
  ['overweight', 36],
  ['obese', 36]
]

// age group 55-64
const group5564 = [
  ['Weight Range', 'Rates among age 55-64'],
  ['underweight', 0],
  ['normal', 27],
  ['overweight', 39],
  ['obese', 34]
]

// age group 65-74
const group6574 = [
  ['Weight Range', 'Rates among age 65-74'],
  ['underweight', 1],
  ['normal', 24],
  ['overweight', 43],
  ['obese', 32]
]

// age group 75+
const group75 = [
  ['Weight Range', 'Rates among age 75+'],
  ['underweight', 1],
  ['normal', 27],
  ['overweight', 41],
  ['obese', 31]
]

// total
const total = [
  ['Weight Range', 'Rates among all ages'],
  ['underweight', 2],
  ['normal', 34],
  ['overweight', 36],
  ['obese', 28]
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
    return group4554
  } else if (age >= 65 && age < 75) {
    return group4554
  } else if (age >= 75) {
    return group4554
  } else {
    return total
  }
}

export default ageGroup