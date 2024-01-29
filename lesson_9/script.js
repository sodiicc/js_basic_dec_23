const obj = {
  name: 'Vasyl',
  age: 29,
  info(description = '', age = this.age) {
    return `I am ${this.name}, I am ${age}${description ? ' and ' + description : ''}`
  }
}


const myObj = {
  name: 'Meredit',
  age: 24,
  info: obj.info
}

// myObj.info = myObj.info.bind(obj)

function sayHi() {
  return this.name
}

// console.log('sayHi.call(obj)', sayHi.call(myObj))

// console.log('myObj.info.call(obj)', myObj.info.call(obj, 'I am cool !!!', 19))
// console.log('myObj.info.apply(obj)', myObj.info.apply(obj, ['I am cool !!!', 25]))

// sayHi = sayHi.bind(obj)

// console.log('sayHi()', sayHi())
// const fdgdfg = {}

const newObj = Object.create({}, { name: { value: 'John' } });
newObj.age = 22
newObj.name = 'Bob'
newObj.age = 30
// console.log('newObj', newObj)





class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.info = `I am ${name}, I am ${age}`
  }

  myName() {
    return `I am ${this.name}`
  }
}

const myPerson = new Person('Vasyl', 22)
const driver = new Person('Shumacher', 32)
driver.profession = 'Driver'

console.log('driver', driver)
console.log('myPerson', myPerson)
console.log('myPerson', myPerson.myName())
console.log('myPerson', myPerson.info)
