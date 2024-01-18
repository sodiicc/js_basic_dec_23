
let persons = [
  {name: 'Vasyl', age: 19, salary: 1800},
  {name: 'Diana', age: 22, salary: 2400},
  {name: 'Bob', age: 21, salary: 2100},
  {name: 'Margaret', age: 28, salary: 1400},
  {name: 'Bill', age: 35, salary: 3200}
]

const myObj = {
  name: 'Vasyl',
  age: 19,
  salary: 1800
}

function changeObj(obj, field, value) {
  // if(5 === 2 + 3) {
  //   const myStringConst = 'This is Const'
  //   let myStringLet = 'This is Let'
  //   var myStringVar = 'This is Var'
  // }
  // console.log('myStringVar', myStringVar)
  // console.log('myStringLet', myStringLet)
  // console.log('myStringConst', myStringConst)
  function getClone(object) {
    return structuredClone(object)
  }

  const objClone = getClone(obj)
  
  objClone[field] = value
  return objClone
}



const newObject = changeObj(myObj, 'salary', 2900)
console.log('newObject', newObject)

function multiSumm(a) {
  return function(b) {
    return a + b
  }
}

console.log(multiSumm(15)(55))

const addTen = multiSumm(10) 

console.log(addTen(64))
console.log(addTen(13))
console.log(addTen(7))
console.log(addTen(2))

