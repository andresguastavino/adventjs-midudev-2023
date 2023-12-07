function drawGift(size, symbol) {
  if (size === 1) {
    return '#\n'
  }

  let a = ''
  let b = ''
  let c = ''
  for (let i = 0; i <= size; i++) {
    a += '#'
    b += symbol
    c += ' '
  }

  let top = c.substring(0, size - 1) + a.substring(0, size)+'\n'
  let middle = a.substring(0, size) + b.substring(0, size - 2) + '#\n'
  let bottom = ''
  for (let i = 0; i < size - 2; i++) {
    top += c.substring(0, size - 2 - i)
      + '#' + b.substring(0, size - 2)
      + '#' + b.substring(0, (size + i) - (size))
      + '#\n'
    bottom += '#' + b.substring(0, size - 2)
      + '#' + b.substring(0, size - 3 - i)
      + '#\n'
  }
  bottom += a.substring(0, size)+'\n'

  return top + middle + bottom
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