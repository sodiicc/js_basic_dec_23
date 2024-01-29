const heroObj = {
  maxHp: 150,
  hp: 150
}

function setHp(value = 15) {
  console.log('value', value)
  const hpText = document.querySelector('.left .hp-text')
  const hpHeight = document.querySelector('.left .hp')
  
  const newValue = (heroObj.hp - value < 0) ? 0 : (heroObj.hp - value)
  
  hpText.innerHTML = newValue
  hpHeight.style.height = `${newValue * 100 / heroObj.maxHp || 2}%`
  heroObj.hp -= value
}
const hitBtn = document.querySelector('.hit-btn')

hitBtn.addEventListener('click', () => setHp())

