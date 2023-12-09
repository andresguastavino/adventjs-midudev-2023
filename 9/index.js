function adjustLights(lights) {
  let a = 0
  let b = 0
  let firstGreen = '🟢'
  let firstRed =  '🔴'

  let i = 0
  for (const light of lights) {
    a += i % 2 === 0 ? firstGreen !== light : firstGreen === light
    b += i % 2 === 0 ? firstRed   !== light : firstRed === light
    i++
  }

  return Math.min(a, b)
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)

console.log(adjustLights(['🔴']))
// -> 0 

console.log(adjustLights(['']))
// -> 0

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢', '🔴', '🟢', '🔴', '🟢','🔴', '🟢', '🔴', '🟢', '🔴', '🟢', '🔴', '🟢',]))
// -> 1

console.log(adjustLights(['🟢', '🔴', '🔴', '🟢', '🔴']))
// -> 2

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))
// -> 1