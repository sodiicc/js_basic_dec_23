// const myName = prompt('Enter you name')

// if (myName.length > 8) {
//   alert('Your name is long')
// } else if (myName.length >= 4) {
//   alert('You name is normal')
// } else {
//   alert('You name is short')
// }


// console.log('END')

const applePrice = 25
const orangePrice = 110
const bananaPrice = 62



let totalPrice = 0

const needApple = confirm('Do you need Apple ?')
if (needApple) {
  const appleCount = Number(prompt('How much Apples do you need (kg) ?'))
  if (!isNaN(appleCount)) totalPrice += appleCount * applePrice
  else alert('You entered not a number')
  // The same result as row above
  // totalPrice = totalPrice + appleCount * applePrice
}

const needOrange = confirm('Do you need Orange ?')
if (needOrange) {
  const orangeCount = Number(prompt('How much Oranges do you need (kg)?'))
  if (!isNaN(orangeCount)) totalPrice += orangeCount * orangePrice
  else alert('You entered not a number')
}

const needBanana = confirm('Do you need Banana ?')
if (needBanana) {
  const bananaCount = Number(prompt('How much Bananass do you need (kg) ?'))
  if (!isNaN(bananaCount)) totalPrice += bananaCount * bananaPrice
  else alert('You entered not a number')
}

const totalElement = document.querySelector('.total')
if (totalPrice) {
  const priceText = `You purchase cost ${totalPrice} UAH`
  totalElement.innerText = priceText
  console.log(priceText)
} else {
  const emptyText = `You shopping card is empty`
  totalElement.innerText = emptyText
  console.log(emptyText)
}