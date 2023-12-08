function organizeGifts(gifts) {
  const nums = gifts.match(/\d+/g);
  const chars = gifts.match(/[a-zA-Z]+/g);

  let result = ''
  for (let i of [ ...Array.from({ length: nums.length }).keys() ]) {
    let a = Math.floor(nums[i] / 50) 
    let b = Math.floor((nums[i] - (a * 50)) / 10) 
    let c = Math.floor((nums[i] - (a * 50) - (b * 10)))

    let d = ('['+chars[i]+']').repeat(a)
    let e = ('{'+chars[i]+'}').repeat(b)
    let f = c > 0 ? ('('+chars[i].repeat(c)+')') : ''
    result += d + e + f
  }

  return result
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

console.log(organizeGifts(`70a11b`))
