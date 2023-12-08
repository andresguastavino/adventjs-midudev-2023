function drawGift(size, symbol) {
  let result = []

  let f = '#'
  for (let i of [...Array.from({ length: size - 1 }).keys()]) {
    i = i + 1
    let a = (' ').repeat(size - 1 - i)
    let b = symbol.repeat(size - 2)
    let c = symbol.repeat(size + i - size - 1)
    result[i] = a + '#' + b + '#' + c + '#'
    result[size * 2 - i - 2] = '#' + b + '#' + c + '#'

    let d = ('#').repeat(size)
    result[0] = (' ').repeat(size - 1) + d
    result[size * 2 - 2] = d

    f = ('#').repeat(size) + symbol.repeat(size - 2) + '#'
  }

  result[size - 1] = f
  result.push('')

  return result.join('\n')
}

/*
 ##
###
##
*/

console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
// /*
//     #####
//    #***##
//   #***#*#
//  #***#**#
// #####***#
// #***#**#
// #***#*#
// #***##
// #####
// */

console.log(drawGift(1, '^'))
// /*
// #
// */

// console.log(drawGift(10, "%"))
/*
         ##########
        #%%%%%%%%##
       #%%%%%%%%#%#
      #%%%%%%%%#%%#
     #%%%%%%%%#%%%#
    #%%%%%%%%#%%%%#
   #%%%%%%%%#%%%%%#
  #%%%%%%%%#%%%%%%#
 #%%%%%%%%#%%%%%%%#
##########%%%%%%%%#
#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########
*/