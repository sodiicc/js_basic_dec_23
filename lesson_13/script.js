// class Element {
//   constructor(tag) {
//     this.tag = tag
//   }

//   create() {
//     return document.createElement(this.tag)
//   }
// }

// class InputElement extends Element {
//   constructor(tagEl, valueEl) {
//     super(tagEl)
//     this.value = valueEl
//   }

//   deploy() {
//     const elementTag = super.create()
//     elementTag.value = this.value
//     document.body.appendChild(elementTag)
//   }
// }


// class TagElement extends Element {
//   constructor(tagEl, texEl) {
//     super(tagEl)
//     this.text = texEl
//   }

//   deploy() {
//     const elementTag = super.create()
//     elementTag.innerHTML = this.text
//     document.body.appendChild(elementTag)
//   }
// }


// class MyTagElement extends TagElement {
//   constructor(tagEl, texEl) {
//     super(tagEl)
//     this.text = texEl
//   }

//   deploy() {
//     const elementTag = super.create()
//     elementTag.innerHTML = this.text
//     document.body.appendChild(elementTag)
//   }
// }


// const myInput = new InputElement('input', 'My input')
// const myH1 = new TagElement('h1', 'My Header 1')

// myInput.deploy()
// myH1.deploy()

// const arr = [1, 2, 3, 4, 5]
// const multipleFiveArr = arr.map(el => el * 5)

// const arrToObj = arr.map((el, index) => {
//   return {
//     value: el,
//     id: index
//   }
// })

// console.log('multipleFiveArr', multipleFiveArr)
// console.log('arrToObj', arrToObj)


// const persons = [
//   {
//     name: 'Bob',
//     salary: '1,800$'
//   },
//   {
//     name: 'Anna',
//     salary: '2,800$'
//   },
//   {
//     name: 'Elly',
//     salary: '2,400$'
//   },
// ]

// const personsWithNumberSalary = persons.map(person => {
//   return {
//     name: person.name,
//     salary: Number(person.salary.replace(',', '').replace('$', ''))
//   }
// })

// console.log('personsWithNumberSalary', personsWithNumberSalary)

const blocks = ['red', 'green', 'blue']

blocks.forEach(block => {
  const blockEl = document.querySelector(`.${block}`)

  blockEl.addEventListener('click', (event) => {
    event.stopImmediatePropagation()
    console.log('BLOCK NAME', block)
  })

  blockEl.addEventListener('click', (event) => {
    console.log('IMMEDIATE BLOCK NAME', block)
    // event.stopPropagation()
  })





  blockEl.addEventListener('contextmenu', (event) => {
    event.stopPropagation()
    if (block === 'green') {
      event.preventDefault()
    }
    console.log('This is RIGHT click', block)
  })

})

document.body.addEventListener('click', (event) => {
  console.log('BODY')
  // event.stopPropagation()
}, )

// const submitBtn = document.querySelector('.submit')

// submitBtn.addEventListener('click', (event) => {
//   event.preventDefault()
//   fetch('https://sdfsdfs.com/tt')
// })

const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log('Form submission cancelled.');
});
