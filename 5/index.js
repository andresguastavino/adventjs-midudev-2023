function cyberReindeer(road, time) {
  let result = [ road ]
  let steps = 0
  let roadCpy = road
  for (let i = 1; i < time; i++) {
    if (i === 5) {
      roadCpy = roadCpy.replaceAll('|', '*')
    }
    if (roadCpy.at(steps + 1) !== '|') {
      let roadArr = roadCpy.split('')
      let indexOfSanta = roadArr.indexOf('S')
      roadArr[indexOfSanta] = road.at(indexOfSanta) === '|' ? '*' : '.'
      roadArr[indexOfSanta + 1] = 'S'
      roadCpy = roadArr.join('')
      steps++
    }
    result.push(roadCpy)
  }
  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)