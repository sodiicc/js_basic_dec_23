// var myName = 'Vasyl'

// if (true) {
//   let myCar = 'Volvo'
//   var userName = 'Kolya'
//   const pi = 3.14
//   console.log('myCar inside block', myCar)
//   console.log('userName inside block', userName)
// }
// console.log('userName outside', userName)
// console.log('myCar outside', myCar)
// console.log('pi', pi)


// let myName = '   Vasyl"""""   @              !#^%*#!&%$(   '
// const myAge = 32
// const isTeacher = true
// const myNull = null
// const myUndefined = undefined
// const muSymbol = Symbol('a')
// const myBigInt = 654165655615156154119198n
// const myObj = {
//   name: 'Bob',
//   age: 19,
//   schoolInfo: {
//     flor: 8,
//     lesson: 'Math'
//   }
// }

// const myFruit = prompt('Enter your favourite fruit')

// if (myFruit === 'orange') {
//   console.log('You choose an orange')  
// } else if (myFruit === 'apple' ) {
//   console.log('You choose an apple')
// } else {
//   console.log('You choose unknown fruit')
// }

// switch (myFruit) {
//   case 'orange':
//     console.log('You choose an orange')    
//     break;
//   case 'apple':
//     console.log('You choose an apple')    
//     break;

//   default:
//     console.log('You choose unknown fruit')
//     break;
// }

// const myAge = prompt('Enter you age pls')

// let yourInfo
// if (Number(myAge) >= 18) {
//   yourInfo = 'You are adult'
// } else {
//   yourInfo = 'You are a child'
// }

// const yourInfo = Number(myAge) >= 60 ? 'You are an old man' : Number(myAge) >= 18 ? 'You are adult' : 'You are a child'
// console.log('yourInfo', yourInfo)

// let iterationCount = Number(prompt('Enter iteration Count'))

// for (let i = 1; i <= iterationCount; i++) {
//   const el = document.createElement('h1')
//   el.innerHTML = 'Hello ' + i
//   el.style.color = 'red'
//   document.body.appendChild(el)
//   // console.log('Hello', i)
// }

const myStr = 'dfklflsfg55ymbgf'
let ind = 0

while (myStr[ind] !== '5') {
  console.log(myStr[ind])
  ind++
}

// while (iterationCount > 0) {
//   iterationCount--
//   if (iterationCount % 2 === 1) continue
//   if (iterationCount === 4) break

//   const el = document.createElement('h1')
//   el.innerHTML = 'Hello ' + iterationCount
//   el.style.color = `rgb(${iterationCount * 10}, ${iterationCount * 15}, ${ iterationCount * 20})`
//   document.body.appendChild(el)

// }

// do {
//   const el = document.createElement('h1')
//   el.innerHTML = 'Hello ' + iterationCount
//   el.style.color = `rgb(${iterationCount * 10}, ${iterationCount * 15}, ${ iterationCount * 20})`
//   document.body.appendChild(el)

//   iterationCount--
// } while (iterationCount > 0);

const user = {
  name: 'Sabrina',
  age: 27,
  phone: +156487521684,
  email: 'sabrina@gmail.com'
}

for (key in user) {
  const el = document.createElement('h1')
  el.innerHTML = `${key} is ${user[key]}`
  el.style.color = 'green'
  document.body.appendChild(el)
}

