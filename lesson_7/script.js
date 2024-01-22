
let persons = [
  {name: 'Vasyl', age: 19, salary: 1800, arr: [[, {namr: ' Bob'}]]},
  {name: 'Diana', age: 22, salary: 2400},
  {name: 'Bob', age: 21, salary: 2100},
  {name: 'Margaret', age: 28, salary: 1400},
  {name: 'Bill', age: 35, salary: 3200}
]

const myObj = {
  name: 'Vasyl',
  age: 19,
  salary: 1800,
  sayHi: (name = myObj.name) => `Hello ${name}`
}

function getDate() {
  return new Date()
}
// console.log('getDate', getDate())


function addFifteenDeclaration() {
  function myCar() {
    return 'my car is good'
  }
  function myHobbies() {
    return myCar() + ' And i like swimming'
  }
  
  return myHobbies()
}

// console.log('addFifteenDeclaration', addFifteenDeclaration())

const getDateArrow = () => {
  return new Date()
}
// console.log('getDateArrow', getDateArrow())

// const myArrowFunc = () => false

const calc = (num = 23, callback = () => num * 5) => callback(num)

const square = (arg) => arg ** 2
// console.log('square', square(4))

// console.log('calc', calc(12, square))

// (function() {
//   console.log('My country is Ukraine')
// })()

if (54 > 8) {
  function getOne() {
    return 1
  }

  const getTwo = () => 2
}

// console.log('getTwo', getTwo())
// console.log('getOne()', getOne())

function counter(start = 0) {
  let count = start

  function increment(incrementNumber = 1) { 
    count = count + incrementNumber
    return count 
  }
  
  return increment
}

const myCounter = counter()
// console.log('myCounter', myCounter(7))
// console.log('myCounter', myCounter())
// console.log('myCounter', myCounter(9))
// console.log('myCounter', myCounter())

const myCountPlussHundred = counter(100)
// console.log('myCountPlussHundred', myCountPlussHundred())
// console.log('myCountPlussHundred', myCountPlussHundred(4))
// console.log('myCountPlussHundred', myCountPlussHundred(6))
// console.log('myCountPlussHundred', myCountPlussHundred(2))
// console.log('myCountPlussHundred', myCountPlussHundred(15))
// console.log('myCountPlussHundred', myCountPlussHundred())
// console.log('myCountPlussHundred', myCountPlussHundred())

// console.log('myCounter', myCounter())
// console.log('myCounter', myCounter())
// console.log('myCounter', myCounter())

// console.log('myCountPlussHundred', myCountPlussHundred())
// console.log('myCountPlussHundred', myCountPlussHundred())
// console.log('myCountPlussHundred', myCountPlussHundred())


function recursiveDecrement(num) {
  console.log('num', num)
  return num > 1 ? recursiveDecrement(num - 1) : 1
}

recursiveDecrement(10)

function factorial(num) {
  return num > 1 ? num * factorial(num - 1) : 1
}

console.log('factorial', factorial(5))
console.log('factorial', factorial(15))

