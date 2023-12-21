
let myName = 'Vasyl'
let myAge = 33

// console.log(typeof myAge)

// console.log('My name is ', myName,', I am ', myAge)

// myAge = "I don't know"

// console.log('My name is ', myName,', I am ', myAge)

// const declaredPriceForUserAfterSubscription = 775

/* myName = prompt('Enter new name pls')
myAge = Number(prompt('Enter new age pls'))
myAge = +(prompt('Enter new age pls')) */

myName = prompt('Enter new name pls')
myAge = Number(prompt('Enter new age pls'))
myAge = +(prompt('Enter new age pls'))

const outputInfo = `My name is  ${myName} I am  ${myAge + 150}`

console.log('My name is ' + myName + ' I am ' + (myAge + 150))

console.log(outputInfo) 
