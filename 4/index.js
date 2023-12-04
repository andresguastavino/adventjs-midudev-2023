function decode(message) {
  let i = 0
  let lvlsIndex = []
  while (i < message.length) {
    let char = message.at(i)
    if (char === '(') {
      lvlsIndex.push(i)
    } else if (char === ')') {
      let openingIndx = lvlsIndex.pop()
      let inverted = message.substring(openingIndx + 1, i)
        .split('')
        .reverse()
        .join('')
      message = message.substring(0, openingIndx + 1) 
        + inverted
        + message.substring(i, message.length)
    }
    i++
  }

  return message.replaceAll('(', '').replaceAll(')', '')
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const d = decode('sa(u(cla)((tn)a))s')
console.log(d) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus