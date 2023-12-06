function maxDistance(movements) {
  let countLeft = 0
  let countRight = 0
  let countRandom = 0

  let i = 0
  while (i < movements.length) {
    if (movements[i] === '>') countRight++
    if (movements[i] === '<') countLeft++
    if (movements[i] === '*') countRandom++
    i++
  }
  
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