fetch('http://localhost:8000')
.then(res => res.json())
.then(data => console.log(data))

fetch('http://localhost:8000/todo', {
  method: 'post',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: 'Bob',
    age: 32
  })
})
.then(res => res.json())
.then(data => console.log(data))

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
  fetch('http://localhost:8000/note', {
  method: 'post',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: 'MyLesson',
    text: 'This is the last LEsson',
    name: 'Margarett',
    color: 'white'
  })
})
.then(res => res.json())
.then(data => console.log(data))
})