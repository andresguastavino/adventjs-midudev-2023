function calculateTime(deliveries) {
  let total = 7*3600
  for (const time of deliveries) {
    const parts = time.split(':')
    const totalDeliveryTime = parseInt(parts[0]) * 3600
      + parseInt(parts[1]) * 60
      + parseInt(parts[2])
    total -= totalDeliveryTime
  }
  const isTimeLeft = total > 0
  total = Math.abs(total)
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = Math.floor(total - hours * 3600 - minutes * 60)

  return ('-').repeat(isTimeLeft)
    + ('0').repeat(hours<10)+hours+':'
    + ('0').repeat(minutes<10)+minutes+':'
    + ('0').repeat(seconds<10)+seconds
}

let res = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
console.log('1:',res) // '-02:20:00'

res = calculateTime(['02:00:00', '05:00:00', '00:30:00'])
console.log('2:',res) // '00:30:00'

res = calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
]) 
console.log('3:',res)// '-05:29:00'