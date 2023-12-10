function createChristmasTree(ornaments, height) {
  let objStart = {}
  let objEnd = {}
  let totalCicles = 0
  for (const i of [ ...Array.from({ length: height }).keys() ]) {
    totalCicles += i + 1
    objStart[totalCicles - i] = (' ').repeat(height - i - 1)
    objEnd[totalCicles] = '\n'
  }

  let tree = ''
  for (const i of [ ...Array.from({ length: totalCicles }).keys() ]) {
    tree += objStart[i + 1] ?? ''
    tree += ornaments.at(i % ornaments.length)
    tree += objEnd[i + 1] ?? ' '
  }
  return tree + (' ').repeat(height - 1) + '|\n'
}

console.log(createChristmasTree('123', '4'))
/*
   1
  2 3
 1 2 3
1 2 3 1
   |
*/

console.log(createChristmasTree('*@o', '3'))
/*
  *
 @ o
* @ o
  |
*/