function maxDistance(movements) {
  const a = movements.split(/>/g).length - 1
  const b = movements.split(/</g).length - 1
  const c = movements.length - a - b
  return Math.abs(a - b) + c
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