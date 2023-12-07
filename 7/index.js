function drawGift(size, symbol) {
  if (size === 1) {
    return '#\n'
  }

  const result = []
  for (let i = 1; i < size - 1; i++) {
    let line = `#${ Array(size - 2).fill(symbol).join('') }#${ Array((size + i) - (size + 1)).fill(symbol).join('') }#`
    result[i] = `${ Array(size - (1 + i)).fill(' ').join('') }${ line }`
    result[size * 2 - (i + 2)] = line
  }

  result[size - 1] = `${ Array(size).fill('#').join('') }${ Array(size - 2).fill(symbol).join('') }#`
  result[2 * size - 2] = Array(size).fill('#').join('')
  result[0] = `${ Array(size - 1).fill(' ').join('') }${ result[2 * size - 2] }`

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
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/

console.log(drawGift(10, "%"))
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