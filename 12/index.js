function checkIsValidCopy(original, copy) {
  const objMap = {
    '#': ['+',':','.',' '],
    '+': [':','.',' '],
    ':': ['.',' '],
    '.': [' '],
    ' ': []
  }

  let valid = true
  original.split('').find((ogChar, i) => {
    const a = ogChar.toLowerCase()
    const b = objMap[ogChar] || ['#','+',':','.',' ']
    valid = ogChar !== copy.at(i)
    valid = valid && a !== copy.at(i)
    valid = valid && !b.includes(copy.at(i))
    return valid
  })
  return !valid
}

let res = checkIsValidCopy('Santa Claus is coming','sa#ta Cl#us i+ comin#') // true
console.log('1:',res)
res = checkIsValidCopy('s#nta Cla#s is coming','p#nt: cla#s #s c+min#') // false (por la p inicial)
console.log('2:',res)
res = checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
console.log('3:',res)
res = checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (hay un # donde no debería)
console.log('4:',res)
res = checkIsValidCopy('Santa Claus', '###:. c:+##')
console.log('5:',res)
res = checkIsValidCopy('3 #egalos', '3 .+:# #:') 
console.log('6:',res)
res = checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s') // false
console.log('7:',res)
res = checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#') // false
console.log('8:',res)
res = checkIsValidCopy('Santa Claus', '###:. c:+##') // true
console.log('9:',res)
