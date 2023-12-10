function createChristmasTree(ornaments, height) {
  let tree = ''
  let line = ''
  let j = 0
  for (const i of [ ...Array.from({ length: height }).keys() ]) {
    line = (' ').repeat(height - i - 1)
    for (const z of [ ...Array.from({ length: i + 1 }).keys() ]) {
      line += ornaments.at(j % ornaments.length) + ' '
      j++
    }
    tree += line.substring(0, line.length - 1) + '\n'
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