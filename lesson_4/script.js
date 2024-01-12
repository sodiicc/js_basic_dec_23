// let count = 0
// do {
//   console.log(count)
//   count++
// }
// while(count < 0)

// for(let i = 0; i < 20; i += 2) {
//   console.log('i', i)

// }

const myObj = {
  'my-name': 'Vasyl',
  age: 18
}

let myName = 'Vasyl'

const myNameArr = ['V', 'a', 's', 'y', 'l']

// const carModels = ['Toyota', 'Volvo', 'Ford', 15, 98 , myObj, true, undefined, Symbol('a'), null, 'Vasyl', ['yes', 15, [{name: 'me'}]]]

const carModels = ['Toyota', 'Volvo', 'Ford']
// console.log('carModels', carModels)


// console.log('SORTED',  carModels.sort((a, b) => {
//   if(a > b) return -1
//   if(a < b) return 1
// }))

let persons = [
  {name: 'Vasyl', age: 19, salary: 1800},
  {name: 'Diana', age: 22, salary: 2400},
  {name: 'Bob', age: 21, salary: 2100},
  {name: 'Margaret', age: 28, salary: 1400},
  {name: 'Bill', age: 35, salary: 3200}
]

// console.log('SORTEDED PERSONS',  persons.sort((a, b) => {
//   if( a.salary > b.salary) return 1
//   if( a.salary < b.salary) return -1
// }))

let total = 0
// for (let i = 0; i < persons.length; i++) {
//   total += persons[i].salary
// }

// for(let person of persons) {
  //   console.log('person', person)
  
  // }
  persons.forEach(p => {
    total += p.salary 
  })

  const newPersons = persons.map(p => {
    return {
      name: p.name.toUpperCase(),
      age: p.age,
      salary: p.salary * 1.5
    }
  })
  
  // console.log('total', total)

for (let i = 1; i <= 10; i++) {
  const block = document.createElement('div')
  block.style.display = 'inline-block'
  block.style.padding = '5px 10px'
  block.style.margin = '5px 10px'
  block.style.backgroundColor = '#b8c'

  for (let j = 1; j <= 10; j++) {
    const row = document.createElement('h3')
    row.innerHTML = `${i} * ${j} = ${i * j}`
    block.appendChild(row)
  }
  document.body.appendChild(block)
}
