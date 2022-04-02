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

//All elements
// const friends = ['Michael', 'Steven', 'Peter']
// const newLength = friends.push('Jay')
// console.log(friends)
// console.log(newLength)

// friends.unshift('John')
// console.log(friends)
// // Remove elements
// const poped = friends.pop() //Last
// console.log(friends)
// console.log(poped)
// friends.pop() //Last

// console.log(friends)
// friends.shift() //First
// console.log(friends)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('BOM'))

// console.log(friends.includes('Steven'))
// console.log(friends.includes('BOM'))

// if (friends.includes('Steven')) {
//   console.log('You have a friend calls Steven')
// }

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
// ]

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// }
// console.log(jonas)
// console.log(jonas.lastName)
// console.log(jonas['lastName'])

// const nameKey = 'Name'
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestedIn = prompt('入力してください')

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn])
// } else {
//   console.log('NOOOOO')
// }

// jonas.location = 'VIETNAM'
// jonas['twitter'] = '@jonasschmedtman'
// console.log(jonas)

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: false,

//   // calcAge: function () {
//   //   console.log(this)
//   //   return 2037 - this.birthYear
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear
//     return this.age
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//   },
// }

// console.log(jonas.calcAge())
// console.log(jonas.age)
// console.log(jonas.age)
// console.log(jonas.age)
// // console.log(jonas['calcAge'](1995))

// console.log(
//   `${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and ${
//     jonas.hasDriversLicense ? "he has a driver's license" : 'No driver'
//   }`
// )
// console.log(jonas.getSummary())

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2
//     return this.bmi
//   },
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2
//     return this.bmi
//   },
// }

// mark.calcBMI()
// john.calcBMI()
// console.log(mark.bmi.toFixed(2), john.bmi.toFixed(2))

// console.log('Lifting weights repetition 1 🏋️‍♀️')
// console.log('Lifting weights repetition 2 🏋️‍♀️')
// console.log('Lifting weights repetition 3 🏋️‍♀️')
// console.log('Lifting weights repetition 4 🏋️‍♀️')
// console.log('Lifting weights repetition 5 🏋️‍♀️')
// console.log('Lifting weights repetition 6 🏋️‍♀️')
// console.log('Lifting weights repetition 7 🏋️‍♀️')
// console.log('Lifting weights repetition 8 🏋️‍♀️')
// console.log('Lifting weights repetition 9 🏋️‍♀️')
// console.log('Lifting weights repetition 10 🏋️‍♀️')

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
// }

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ]

// const types = []
// // console.log(jonasArray[0])
// // console.log(jonasArray[1])
// // // ...
// // console.log(jonasArray[jonasArray.length - 1])

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i])

//   //Filling types array
//   // types[i] = typeof jonasArray[i]
//   types.push(typeof jonasArray[i])
// }

// console.log(types)

// const years = [1991, 2007, 1969, 2020]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i])
// }
// console.log(ages)

// // continue and break

// console.log('----ONLY STRINGS====')
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== 'string') continue
//   console.log(jonasArray[i], typeof jonasArray[i])
// }

// console.log('----BREAK WITH NUMBER====')
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === 'number') break
//   console.log(jonasArray[i], typeof jonasArray[i])
// }

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
// ]

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ]

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i])
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----Starting exercise-- ${exercise}`)

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting ${exercise} wegith repetition ${rep}`)
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
// }

// let rep = 1
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
//   rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice)

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1
//   if (dice === 6) console.log('Loop is about to end....')
// }
