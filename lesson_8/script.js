
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
  thisObj: function() {return this},
  thisObjArrow: () => this,
  sayHi: function() { 
    function show() {
      return this
    }
    const arrowShow = () => this
    console.log('arrowShow', arrowShow())
    console.log('show()', show())
    return `Hello ${this.name}`
  },
  sayHiArrow: () => { 
    function show() {
      return this
    }
    const arrowShow = () => this
    console.log('arrowShow', arrowShow())
    console.log('show()', show())
    return `Hello ${this.name}`
  },
  obj: {
    sayHello: () => this
  }
}

const myObj1 = {
  name: 'Vasyl',
  age: 19,
  salary: 1800,
  thisObj: function() {return this},
  thisObjArrow: () => this,
  sayHi: function() { 
    function show() {
      return this
    }
    const arrowShow = () => this
    console.log('arrowShow', arrowShow())
    console.log('show()', show())
    return `Hello ${this.name}`
  },
  sayHiArrow: () => { 
    function show() {
      return this
    }
    const arrowShow = () => this
    console.log('arrowShow', arrowShow())
    console.log('show()', show())
    return `Hello ${this.name}`
  },
  obj: {
    sayHello: () => this
  },
  showMyObj: function() {
    return myObj
  }
}

// const yourObj = {
//   name: 'Margaret',
//   age: 29,
//   salary: 1400,
//   greetings: myObj.sayHi
// }



function greetings() {
  return this
}
function greetings3() {
  const greetings4 = greetings
  console.log('greetings4', greetings4())
}
greetings3()

const greetings2 = () => false

// // console.log('greetings', greetings())

// const vehicle = {
//   width: 4000,
//   height: 2000,
// }

// const car = {
//   date: 2020,
//   color: 'blue',
//   height: 143
// }

// const bus = {
//   date: 2013,
//   color: 'white',
//   model: 'Mersedes',
//   height: 3400,
//   width: 2400
// }
// const golfCar = {
//   pasangers: 2
// }

// car.__proto__ = vehicle
// bus.__proto__ = vehicle
// golfCar.__proto__ = car


// const myObj = {}

// const myNum = new Number(5)
// console.log('person', person)

// var person = {
//   name: 'Lisa'
// }
// console.log('person 555', person)

function Car(model = 'bmw', color = 'red', maxSpeed = 240) {
  this.model = model
  this.color = color
  this.date = 2021
  this.carSpeed = maxSpeed
  this.speed = () => `${this.model} avarage speed = ${maxSpeed/2}`
}

const myCar = new Car('Volvo', 'Black', 220)
const yourCar = new Car('Audi', 'White')

// console.log('yourCar', yourCar)

// console.log('myCar', myCar)
