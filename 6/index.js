function maxDistance(movements) {
  const countObj = {
    '>': 0,
    '<': 0,
    '*': 0
  }
  movements.split('').forEach(char => countObj[char] = countObj[char]+1)
  return Math.abs(countObj['>'] - countObj['<']) + countObj['*']
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