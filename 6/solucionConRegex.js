function maxDistance(movements) {
  let leftCount = (movements.match(/\</g) || []).length
  let rightCount = (movements.match(/\>/g) || []).length
  let randomCount = (movements.match(/\*/g) || []).length
  return Math.abs(leftCount - rightCount) + randomCount
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