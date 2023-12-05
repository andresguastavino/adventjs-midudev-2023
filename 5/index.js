function cyberReindeer(road, time) {
  let result = [ road ]
  let roadCpy = road
  let i = 1
  for (; i < road.indexOf('|'); i++) {
    let roadArr = roadCpy.split('')
    let indexOfSanta = roadArr.indexOf('S')
    roadArr[indexOfSanta] = '.'
    roadArr[indexOfSanta + 1] = 'S'
    roadCpy = roadArr.join('')
    result.push(roadCpy)
  }
  result = result.slice(0, time)

  for (; i < 5; i++) {
    result.push(roadCpy)
  }
  result = result.slice(0, time)

  const obj = {
    '|': '*',
    '.': '.'
  }

  roadCpy = roadCpy.replaceAll('|', '*')
  for (;i < time; i++) {
    let roadArr = roadCpy.split('')
    let indexOfSanta = roadArr.indexOf('S')
    roadArr[indexOfSanta] = obj[road.at(indexOfSanta)]
    roadArr[indexOfSanta + 1] = 'S'
    roadCpy = roadArr.join('')
    result.push(roadCpy)
  }

  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)

console.log(cyberReindeer('S..|...|..', 10))

console.log(cyberReindeer('S.|.', 4))