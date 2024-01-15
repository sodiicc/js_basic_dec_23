
let persons = [
  {name: 'Vasyl', age: 19, salary: 1800},
  {name: 'Diana', age: 22, salary: 2400},
  {name: 'Bob', age: 21, salary: 2100},
  {name: 'Margaret', age: 28, salary: 1400},
  {name: 'Bill', age: 35, salary: 3200}
]

// const newPersons = persons.map(p => {
//   return p
// })

// console.log('newPersons', newPersons)

// const user = {
//   name: 'Muller',
//   age: 29,
//   profession: 'actor'
// }

function greetings(name, age, profession, isGreetings) {
  // const name = 'CARL'
  // const age = 34
  // const profession = 'Driver'
  // const isGreetings = true
  
  if (isGreetings) {
    return `Hello ${name}, you are ${age}, you are ${profession} !!!!`
  }

  return `How are you ${name} ?`
}

const myGreet = greetings('Vasyl', 28, 'a proger', true)

const bobsGreet = greetings('Bob')

// alert(myGreet)
// alert(bobsGreet)



// console.log(greetings('Vasyl', 28, 'a proger', true))

function summ() {
  // [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9] = arguments
  const result = [...arguments].reduce(function(acc, el) {
    return acc + el
  }, 0)
  // const result = [...arguments].reduce((acc, el) => acc + el, 0)

  return result
}

// console.log(summ(1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9))

// function temperatureConverter(temp, isCels = false) {
//   if (isCels) {
//     return temp * 9/5 + 32
//   }
//   return (temp - 32) * 5/9
// }

// const myTemp = Number(prompt('Enter you temperature pls.'))
// const isCelsius = confirm('Is it Celsius ?')

// alert(temperatureConverter(myTemp, isCelsius))
// console.log(summ('Hello', ' World!!!'))

// const numbers = [5, 8, summ(4, 18), 17, summ(61, -50)]
// console.log('numbers', numbers)

// function removeArrElement(arr, name) {
//   return arr.filter(function(el) {
//     return el.name !== name
//   })
// }
// console.log(removeArrElement(persons, 'Diana'))
// console.log(removeArrElement(persons, 'Bob'))
// console.log(removeArrElement(persons, 'Vasyl'))

// function removeArrElements(arr, names) {
//   return arr.filter(function(el) {
//     return !names.includes(el.name)
//   })
// }

// console.log(removeArrElements(persons, ['Vasyl', 'Bob']))

function calculator(a, b, callback) {
  return callback(a, b)
}

function summ(a, b) {
  return a + b
}

function mult(a, b) {
  return a * b
}

const expo = function(a, b) {
  return a ** b
}

console.log(calculator(3, 4, summ))
console.log(calculator(3, 4, mult))
console.log(calculator(3, 4, expo))

const myObj = {
  name: 'Vasyl',
  age: 19,
  salary: 1800,
  sayHi: function(name) {
    return `Hello from ${name}`
  },
  myInfo() {
    return 'I am 19'
  }
}
