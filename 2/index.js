function manufacture(gifts, materials) {
  if (!gifts?.length || !materials) {
    return []
  }

  // remove duplicates to optimize performance
  let giftsAux = [ ...new Set(gifts) ]
  let materialsAux = [ ...new Set(materials.split('')) ]

  const doableGifts = giftsAux.map(gift => {
    let i = 0
    let doable = true
    while (i < gift.length && doable) {
      doable = materialsAux.includes(gift[i])
      i++
    }
    if (doable) {
      return gift
    }
  }).filter(gift => gift !== undefined)

  return doableGifts
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

console.log(manufacture(gifts3, materials3)) // []

const gifts4 = []
const materials4 = 'pep'

console.log(manufacture(gifts4, materials4)) // []

const gifts5 = undefined
const materials5 = ''

console.log(manufacture(gifts5, materials5)) // []

const gifts6 = [ 'tren', 'peluche' ]
const materials6 = ''

console.log(manufacture(gifts6, materials6)) // []

const gifts7 = [ 'tren', 'peluche' ]
const materials7 = undefined

console.log(manufacture(gifts7, materials7)) // []

const gifts8 = [ 'cohete', 'peluche', 'avion' ]
const materials8 = 'nivaohtec'

console.log(manufacture(gifts8, materials8)) // ["cohete","avion"]

const gifts9 = [ 'cohete', 'peluche', 'avion', 'cohete', 'peluche', 'peluche', 'peluche', 'peluche', 'peluche' ]
const materials9 = 'cheaspluclehchepuelcuhelcueucplechcuelcp'

console.log(manufacture(gifts9, materials9)) // ["cohete","avion"]