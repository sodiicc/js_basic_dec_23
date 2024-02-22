const myStr = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt suscipit quia, laudantium repellendus voluptate facere. Nobis molestiae +876986 repellendus culpa quibusdam quam consequatur at alias quo, sequi asperiores, accusamus doloremque ab ad aliquid eum hic totam excepturi modi. Recusandae nemo quia distinctio ducimus, +38(066)438-54-21 eveniet cum sequi temporibus totam atque sapiente perspiciatis voluptates error nihil magnam culpa assumenda, tempore aliquam molestiae deleniti perferendis explicabo vel facilis nobis modi. Culpa nobis error alias consequatur aut doloribus suscipit? Iusto quia ipsa cum vel aperiam accusamus rem sunt. Deleniti quibusdam unde esse quae veniam, omnis eius nemo debitis asperiores architecto natus. Id placeat eos, +38(066)928-37-91 harum quaerat neque corrupti omnis labore ratione maiores laboriosam fugiat recusandae ab, adipisci quasi! Temporibus neque nisi amet iusto tempora explicabo! Quas quia perferendis, deserunt vitae cupiditate dignissimos assumenda! Sed aliquid soluta asperiores commodi doloribus consequatur quasi facere magnam quibusdam a, possimus perspiciatis deserunt eum, corporis nemo, expedita +65385 maiores voluptate minus impedit nostrum distinctio! Eum repellat ipsum delectus ex veritatis officiis a voluptas! Nobis magnam beatae excepturi incidunt! Alias quod dolorem pariatur eligendi quasi architecto. Earum obcaecati ducimus praesentium quam quibusdam porro laborum officia, cum ut. Nesciunt, quia quibusdam. Asperiores enim assumenda quos incidunt omnis cumque sunt voluptatibus dicta quibusdam aperiam.'
// (\d{2}|[a-b]{2})
// const myRegExp = new RegExp(/\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}/gm)
const myRegExp = /\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}/gm

// myRegExp.match(myStr)
console.log('myRegExp.match(myStr)', myStr.search(myRegExp))

console.log('myRegExp.exec(myStr)', myRegExp.exec(myStr))

const myInput = document.querySelector('input')
const myBtn = document.querySelector('button')

myBtn.addEventListener('click', onBtnClick)


function onBtnClick() {
  const number = myInput.value.match(myRegExp)
  const numberInfoElement = document.getElementById('phone-info')
  if (number && number.length === 1) {
    numberInfoElement.className = 'success'
    numberInfoElement.innerHTML = 'This is valid phone number'
  } else {
    numberInfoElement.className = 'error'
    numberInfoElement.innerHTML = 'Please write a valid phone number'
  }
}

const myObj = {
  name: 'Wesley',
  age: 21,
  22: 22
}

const myMap = new WeakMap()

myMap.set([], 'myArr')
// myMap.set(null, 'this is null')
myMap.set({name: 'Wasyl'}, 'this is undefined')

console.log('myMap', myMap)

console.log('myObj', myObj)

const myArr = [1,2,3,4,4,4]
console.log('myArr', myArr)

const mySet = new Set(myArr)
mySet.add('54')
console.log('mySet', mySet)
// console.log('mySet', [...mySet])
