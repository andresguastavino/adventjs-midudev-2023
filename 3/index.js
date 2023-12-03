function findNaughtyStep(original, modified) {
  if (original === modified) return ''

  let i = 0
  while (original.at(i) === modified.at(i)) {
    i++
  }

  return (original.length > modified.length ? original : modified).at(i)
}

console.log('1: ',findNaughtyStep('abcd', 'abcde')) // e
console.log('2: ',findNaughtyStep('stepfor', 'stepor')) // f
console.log('3: ',findNaughtyStep('xxxx', 'xxoxx')) // o
console.log('4: ',findNaughtyStep('o', 'os')) // s
console.log('5: ',findNaughtyStep('ayh', 'ah')) // y
console.log('6: ',findNaughtyStep('dfajrq', 'fajrq')) // d
console.log('7: ',findNaughtyStep('dfajrq', 'dfa')) // j