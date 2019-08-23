
let arrayLike = {
  name: 'Edward',
  age: 22,
  length: 2,
  0: 'a',
  1: 'b'
}

for(let i=0; i < arrayLike.length; i++) {
  console.log('for loop', arrayLike[i])
}

for(let item of arrayLike) {
  console.log('for of', item)
}
