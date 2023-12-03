function findNaughtyStep(original, modified) {
  original = original || ''
  modified = modified || ''

  let naughtyStep = ''
  const originalArr = original.split('')
  const originalArrLength = originalArr.length
  const modifiedArr = modified.split('')
  const modifiedArrLength = modifiedArr.length

  const iterator = originalArrLength > modifiedArrLength
    ? originalArr
    : modifiedArr
  const comparer = originalArrLength > modifiedArrLength
    ? modifiedArr
    : originalArr

  iterator.every((currentChar, i) => {
    let compareAgainst = comparer[i] || ''
    naughtyStep = currentChar !== compareAgainst ? currentChar : ''
    return naughtyStep === ''
  })

  return naughtyStep
}

console.log('1: ',findNaughtyStep('abcd', 'abcde')) // e
console.log('2: ',findNaughtyStep('stepfor', 'stepor')) // f
console.log('3: ',findNaughtyStep('xxxx', 'xxoxx')) // o
console.log('4: ',findNaughtyStep('o', 'os')) // s
console.log('5: ',findNaughtyStep('ayh', 'ah')) // y
console.log('6: ',findNaughtyStep('dfajrq', 'fajrq')) // d
console.log('7: ',findNaughtyStep('dfajrq', 'dfa')) // j
console.log('8: ',findNaughtyStep(undefined, undefined)) // ''
console.log('9: ',findNaughtyStep('abc', undefined)) // 'a'
console.log('10: ',findNaughtyStep(undefined, 'abc')) // 'a'