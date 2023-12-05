function decode(message) {
  let from = message.lastIndexOf('(')
  while (from !== -1) {
    let to = message.indexOf(')', from)
    let inverted = message.substring(from, to + 1)
      .split('')
      .reverse()
      .join('')
      .replace('(', '')
      .replace(')', '')

    message = message.substring(0, from) 
      + inverted
      + message.substring(to + 1, message.length)

    from = message.lastIndexOf('(')
  }

  return message
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