// const myObj = {
//   name: 'Robert'
// }

// const animal = {}
// Object.defineProperty(animal, 'name', {
//   value: 'Dog',
//   enumerable: false,
//   writable: true,
//   configurable: true,
// })

// Object.defineProperty(animal, 'color', {
//   value: 'Blue',
//   enumerable: true,
//   writable: false,
//   configurable: true,
// })

// Object.defineProperties(animal, {
//   legs: {
//     value: 4,
//     writable: true,
//     enumerable: false,
//   },
//   name: {
//     value: "Goat",
//     writable: false,
//     enumerable: true,
//   }
// })


// console.log('animal', animal)

const header = document.getElementById('my-block')
header.innerHTML = '<i><h1>It`s bold</h1></i>'

header.style.color = '#751'
// header.style.fontSize = '50px'
header.style['font-size'] = '50px'

const pElements = document.getElementsByTagName('p')

const firstP = pElements[0]

firstP.remove()

const input = document.querySelector('input')

input.type = 'text'
