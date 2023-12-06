function maxDistance(movements) {
  const movementsArr = movements.split('')
  const countLeft = movementsArr.filter(char => char === '<').length
  const countRight = movementsArr.filter(char => char === '>').length
  const countRandom = movementsArr.filter(char => char === '*').length
  return Math.abs(countLeft - countRight) + countRandom
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5