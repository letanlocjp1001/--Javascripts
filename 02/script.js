'use strict'
/*
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive ')
*/ /////////////

// function logger() {
//   console.log('My Name Kaneki')
// }

// // calling / running / invoking function
// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`
//   return juice
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

// const num = Number('23')

// function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear
// }
// const age1 = calcAge1(1991)

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear
// }
// const age2 = calcAge2(1995)
// console.log(age1, age2)

//Arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear
// const age3 = calcAge3(1999)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear
//   const retirement = 65 - age
//   // return retirement
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1993, 'Kaneki'))
// console.log(yearsUntilRetirement(1988, 'Sarad'))

// function cutFuitPieces(fruit) {
//   return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFuitPieces(apples)
//   const orangesPieces = cutFuitPieces(oranges)

//   const juice = `Juice with ${applePieces} piece and ${orangesPieces} piece`
//   return juice
// }

// console.log(fruitProcessor(2, 3))
// const calcAge = (birthYear) => {
//   return 2037 - birthYear
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`)
//     return retirement
//   } else {
//     console.log(`${firstName} has already retired`)
//     return -1
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Kaneki'))
// console.log(yearsUntilRetirement(1950, 'Sahra'))

// Arrays

// const friend1 = 'Michael'
// const friend2 = 'Steven'
// const friend3 = 'Peter'

// // method 1
// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)
// //method 2
// const years = new Array(1991, 1994, 1990, 2000, 'kaneki')
// // console.log(years)

// console.log(friends[0])
// console.log(friends[2])
// console.log(friends.length)

// console.log(friends[friends.length - 1])

// friends[2] = 'Jay'
// console.log(friends)
// console.log(friends[friends.length - 1])

// const firstName = 'Jonas'
// const jonas = [firstName, 'Kaneki', 2037 - 1991, 'teacher', friends]

// console.log(jonas)
// console.log(jonas.length)

// const calcAge = function (birthYear) {
//   return 2037 - birthYear
// }
// const years1 = [1990, 1967, 2002, 2010, 2018]

// const age = calcAge(years1[0])
// const age1 = calcAge(years1[1])
// const age2 = calcAge(years1[years1.length - 1])
// console.log(age, age1, age2)

const friends = ['Michael', 'Steven', 'Peter']
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)
