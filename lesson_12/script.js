// const colorElements = document.querySelectorAll('.color')
// console.log('colorElements', colorElements)
// const lastEl = colorElements[colorElements.length - 1]

// const newEl = document.createElement('div')
// newEl.innerHTML = 'MY ELEMENT'
// lastEl.after(newEl)

// const nameEl = document.getElementsByName('good')
// console.log('nameEl', nameEl)

// nameEl[0].setAttribute('id', '23')
// nameEl[0].setAttribute('frewgf', 'qqq')

// nameEl[0].id = '99'
// nameEl[0].removeAttribute('id')
// nameEl[0].removeAttribute('class')
// newEl.remove()
// nameEl[0].classList.remove('num')



// const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// elements.forEach((el, index) => {
//   const myEl = document.createElement('h3')
//   myEl.innerHTML = `my el ${index}`

//   document.body.appendChild(myEl)

//   if (index % 3 === 2) {
//     const mySpecialEl = document.createElement('h2')
//     mySpecialEl.innerHTML = `MY SPECIAL ELEMENT ${index}`

//     document.body.appendChild(mySpecialEl)
//   }
// })


// const myBtn = document.querySelector('.btn')
// const stopTimeoutBtn = document.querySelector('.stop-timeout')

// myBtn.addEventListener('click', onBtnClick)

// document.body.addEventListener('keypress', onBtnClick)
// document.body.onkeyup =  onBtnClick

// function onBtnClick(event) {
//   console.log('event', event)
//   if(event.key === 'Enter') {
//     console.log('You clicked ENTER')
//   } else {
//     console.log('You have clicked NOT Enter TRY AGAIN !!!')
//   }
// }

// function sayHi() {
//   console.log('Hello after 2 sec')
// }

// window.setTimeout(sayHi, 2000)

// window.setTimeout(() => {
//   console.log('Hello after 5 sec')
// }, 5000)



// const timer = setInterval(sayHi, 2000)
// const timeoutTimer = setTimeout(() => {
//   console.log('This is timeout')
// }, 2000)

// myBtn.onclick = () => clearInterval(timer)
// stopTimeoutBtn.onclick = () => clearTimeout(timeoutTimer)

// function clock() {
//   return new Date().toLocaleTimeString()
// }

// console.log('clock', clock())

// const clockBlock = document.createElement('h1')
// clockBlock.innerHTML = clock()

// document.body.appendChild(clockBlock)

// setInterval(() => {
//   clockBlock.innerHTML = clock()
// }, 1000)

const mouseImgElement = document.querySelector('img')


function onMouseMoveFunc(event){
  console.log('X: ', event.pageX, 'Y: ', event.pageY)
  setTimeout(() => {
    mouseImgElement.style.left = `${event.pageX}px`
    mouseImgElement.style.top = `${event.pageY}px`
  }, 80)
}

document.addEventListener('mousemove', onMouseMoveFunc)

