class Engine {
  constructor(value, capacity) {
    this.value = value
    this.capacity = capacity
  }

  horsePower() {
    return this.capacity * 1.5
  }
}

const volvoEngine = new Engine(2.4, 170)
const mazdaEngine = new Engine(2, 120)



const volvoObjEngine = {
  value: 1.8,
  capacity: 150
}
const mazdaObjEngine = {
  value: 2,
  capacity: 130
}

function horsePower() {
  return this.capacity * 1.5
}

volvoObjEngine.__proto__.horsePower = horsePower
mazdaObjEngine.__proto__.horsePower = horsePower



const Person = class {
  constructor(age, name) {
    this.age = age
    this.name = name
  }

  sayHi() {
    return `Hello i am ${this.name} !!!`
  }
}

class Teacher extends Person {
  constructor(topic, exp, age, name) {
    super(age, name)
    this.topic = topic
    this.exp = exp
  }

  introduce() {
    return this.exp > 5 ? `I am an expirianced teacher, i am ${this.age}, i teach ${this.topic}` : super.sayHi()
  }

  sayHi() {
    return 'Can`t speak'
  }

  get myName() {
    return this.name
  }

  set myName(newName) {
    this.name = newName
  }

  setName(newName) {
    this.name = newName
  }
}

const mathTeacher = new Teacher('Mathematics', 7, 28, 'Susanna')
const bioligyTeacher = new Teacher('Biology', 3, 28, 'Wasley')
console.log('bioligyTeacher', bioligyTeacher)
console.log('mathTeacher', mathTeacher)
