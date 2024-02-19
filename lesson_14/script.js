const user = {
  age: 23,
  name: 'Mira',
  prof: 'Tacher',
  properties: {
    isMarried: true,
    hobby: 'Fishing'
  }
}

// const age = user.age
// const name = user.name

const { name: userName, age, ...otherProps } = user
// console.log('otherProps', otherProps)

// console.log('hobby', hobby)
// console.log('isMarried', isMarried)
// console.log('userName', userName)

// console.log('age', age)

const colors = ['red', 'green', 'yellow', 'blue', 55]

const yellow = colors[2]
// console.log('yellow', yellow)

const [first, second, third, fourth, fifth] = colors

function showInfo(info) {
  const infoElement = document.createElement('h1')
  infoElement.innerHTML = info
  document.body.appendChild(infoElement)
}

function userInfo(name, age) {
  const data = `User name is ${name}, user age is ${age}`
  return [
    data,
    () => showInfo(data)
  ]
}

// const info = userInfo('Vasyl', 32)[0]
// const setInfo = userInfo('Vasyl', 32)[1]

const [info, setInfo] = userInfo('Vasyl', 32)

// console.log('colors', ...colors)

const divs = document.querySelectorAll('div')
// console.log('divs', [...divs])

function myColors(...restColors) {
  // console.log('restColors', restColors)
  // console.log('arguments', arguments)
  const newColors = [...arguments].map(color => color)
  // console.log('newColors', newColors)
}
// function myColors(first, second, third) {
//   console.log('third', third)
//   console.log('second', second)
//   console.log('first', first)
// }

myColors(...colors)

const [a, ...other] = colors
// console.log('a', a)
// console.log('other', other)

const profUsers = [
  {
    age: 23,
    name: 'Mira',
    prof: 'Tacher',
    properties: {
      isMarried: true,
      hobby: 'Fishing'
    }
  },
  {
    age: 25,
    name: 'Mira',
    prof: 'Boxer',
    properties: {
      isMarried: true,
      hobby: 'Fishing'
    }
  },
  {
    age: 19,
    name: 'Mira',
    prof: 'Sprinter',
    properties: {
      isMarried: true,
      hobby: 'Fishing'
    }
  },
]
// console.log('profUsers', profUsers)

const teacher = {
  age: 23,
  name: 'Mira',
  prof: 'Tacher',
  properties: {
    isMarried: true,
    hobby: 'Fishing'
  }
}

const usersWithId = profUsers.map((user, index) => {
  // const newUser = user
  // newUser.prof = user.prof.toLowerCase()
  // newUser.id = index + 1

  // return newUser

  return {
    ...user,
    prof: user.prof.toLowerCase(),
    id: index + 1
  }
})
// console.log('usersWithId', usersWithId)

// const boxer = structuredClone(teacher)
// boxer.prof = 'boxer'

const boxer = {
  ...teacher,
  prof: 'boxer',
  isCrazy: false
}

const deer = 'animal'
// console.log('deer', deer)

let cat = deer
cat = 'fish'
// console.log('cat', cat)

// console.log('teacher', teacher)
// console.log('boxer', boxer)

function customDate(date = new Date()) {
  return `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`
}

console.log('customDate', customDate())

const presentDate = new Date(3495635434535)
console.log('presentDate', presentDate)

localStorage.setItem('name', 'Vasyl')

const input = document.querySelector('input')
const btn = document.querySelector('button')



btn.addEventListener('click', setTodo)

const storageData = JSON.parse(localStorage.getItem('todoList'))

if (storageData) {
  storageData.forEach(el => {
    toDoEl = document.createElement('h2')
    toDoEl.innerHTML = el
    document.body.appendChild(toDoEl)
  })
}

function setTodo() {
  const text = input.value
  toDoEl = document.createElement('h2')
  toDoEl.innerHTML = text
  document.body.appendChild(toDoEl)
  input.value = ''

  const storage = JSON.parse(localStorage.getItem('todoList'))

  if(storage) {
    localStorage.setItem('todoList', JSON.stringify([...storage, text]))
  } else {
    localStorage.setItem('todoList', JSON.stringify([text]))
  }
}

