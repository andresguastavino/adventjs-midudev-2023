function findFirstRepeated(gifts) {
  const repeated = gifts?.find((gift, i) => {
    return gifts.slice(0, i).indexOf(gift) !== -1
  })
  return repeated !== undefined ? repeated : -1
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5

const giftIds4 = [7, 1, 3, 2, 9, 7]
const firstRepeatedId4 = findFirstRepeated(giftIds4)
console.log(firstRepeatedId4) // 7

const giftIds5 = [5, 1, 3, 2, 8, 8]
const firstRepeatedId5 = findFirstRepeated(giftIds5)
console.log(firstRepeatedId5) // 8

const giftIds6 = [5, 1, 3, 2, 8, 9]
const firstRepeatedId6 = findFirstRepeated(giftIds6)
console.log(firstRepeatedId6) // -1

const giftIds7 = []
const firstRepeatedId7 = findFirstRepeated(giftIds7)
console.log(firstRepeatedId7) // -1

const giftIds8 = undefined
const firstRepeatedId8 = findFirstRepeated(giftIds8)
console.log(firstRepeatedId8) // -1

const giftIds9 = [ 3 ]
const firstRepeatedId9 = findFirstRepeated(giftIds9)
console.log(firstRepeatedId9) // -1

const giftIds10 = [ undefined, undefined ]
const firstRepeatedId10 = findFirstRepeated(giftIds10)
console.log(firstRepeatedId10) // -1