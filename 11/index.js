function getIndexsForPalindrome(word) {
  const half = word.length / 2
  const a = word.substring(0, half)
  const b = word.substring(half % 2 == 0 ? half : half + 1, word.length)
  const bInverted = b.split('').reverse().join('')

  if (a === bInverted) {
    return []
  }
  
  for (const i of [ ...Array.from({ length: word.length }).keys() ]) {
    for (let j of [ ...Array.from({ length: word.length }).keys() ]) {
      let wordArr = word.split('')
      let aux = wordArr[i]
      wordArr[i] = wordArr[j]
      wordArr[j] = aux
      wordArr = wordArr.join('')
      let g = wordArr.substring(0, half)
      let h = wordArr.substring(half % 2 == 0 ? half : half + 1, word.length)
      if (g === h.split('').reverse().join('')) {
        return [i, j]
      }
    }
  }

  return null
}

let res = getIndexsForPalindrome('anna') // []
console.log('1:',res)
res = getIndexsForPalindrome('abab') // [0, 1]
console.log('2:',res)
res = getIndexsForPalindrome('abac') // null
console.log('3:',res)
res = getIndexsForPalindrome('aaaaaaaa') // []
console.log('4:',res)
res = getIndexsForPalindrome('aaababa') // [1, 3]
console.log('5:',res)
res = getIndexsForPalindrome('caababa') // null
console.log('6:',res)
res = getIndexsForPalindrome('rotavator') // []
console.log('7:',res)
res = getIndexsForPalindrome('rotaratov') // [4, 8]
console.log('8:',res)