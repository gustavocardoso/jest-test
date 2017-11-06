const numbers = [2, 4, 6, 8, 10]

numbers.reduce((sum, value) => {
  console.log('Total', sum)
  console.log('Num', value  )
  return sum + value
}, 0)
