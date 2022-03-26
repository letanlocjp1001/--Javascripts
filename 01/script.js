// let js = 'amazing'
// if (js === 'amazing') alert('JavaScript is FUN')

// console.log(40 + 8 + 23 - 10)

// console.log('Kaneki')

// let firstName = 'Kaneki'
// console.log(firstName)

// let javascriptInFun = true
// console.log(typeof javascriptInFun)
// console.log(typeof 23)
// console.log(typeof 'Kaneki')

// javascriptInFun = 'yes'
// console.log(javascriptInFun)

// let year
// console.log(year)
// console.log(typeof year)

// year = 1994
// console.log(typeof year)

// console.log(typeof null)

// const now = 2023

// const ageKaneki = now - 1994
// const ageSarah = now - 2018

// console.log(ageKaneki, ageSarah)

// console.log(ageKaneki * 2, ageKaneki / 10, 2 ** 3)
// //2**3 = 2*2*2

// const firstName = 'Kaneki'
// const lastName = 'Ken'

// console.log(firstName + ' ' + lastName)

// let x = 10 + 5
// x += 10 //x= x + 10
// x *= 4 //x= x * 4
// x++ //x = x+1
// x-- //x = x-1
// x-- //x = x-1
// console.log(x)

// const firstName = 'Kaneki'
// const job = 'Teacher'
// const birthYear = 1994
// const year = 2037

// const kaneki =
//   "I'm " + firstName + ', a ' + (year - birthYear) + 'year old ' + job + '!'
// console.log(kaneki)

// const kanekiNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`
// console.log(kanekiNew)

// console.log(`Just a regular string...`)

// console.log('String with \n\
// multiple \n\
// line ')

// console.log(`String
// multiple
// lines`)

// const age = 12

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗')
// } else {
//   const yearsLeft = 18 - age
//   console.log(`Sarah is too young, Wait another ${yearsLeft} year`)
// }

// const birthYear = 1890
// let century
// if (birthYear <= 2000) {
//   century = 20
// } else {
//   century = 21
// }

// console.log(century)

// const inputYear = '1994'
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)

// console.log(Number('Kaneki'))
// console.log(typeof NaN)

// console.log(String(23))

//5 falsy values: 0, "", undefined, null, NaN
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Kaneki'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// const money = 100
// if (money) {
//   console.log('Dont spend it all 😁')
// } else {
//   console.log('You shold get a job!')
// }

// let height

// height = 30
// if (height) {
//   console.log('defined')
// } else {
//   console.log('UNDEFINED')
// }

// const age = 18
// if (age === 18) console.log('You just vecame an adult')

// const favourite = Number(prompt("What's your faourite number?"))
// console.log(favourite)
// console.log(typeof favourite)

// if (favourite === 23) {
//   console.log('NUMBER')
// } else {
//   console.log('NO NUMBER')
// }

// const hasDriversLicense = true //A
// const hasGoodVision = false //B

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) {
//   console.log('Sarah is able to drive')
// } else {
//   console.log('Some else should drive')
// }
// const day = 'sunday'

// switch (day) {
//   case 'monday':
//     console.log('Plan course structure')
//     console.log('Go to coding meetup')
//     break
//   case 'tuesday':
//     console.log('Prepare throry videos')
//     break
//   case 'wednesday':
//   case 'thusday':
//     console.log('Write code examples')
//     break
//   case 'friday':
//     console.log('Record videos')
//     break
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D')
//     break
//   default:
//     console.log('Not a valid day!')
// }

const age = 28

// age >= 18 ? console.log('I like to drun¥¥ink wine 🍷') : console.log('NOOOOOO')

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

let drink2
if (age >= 18) {
  drink2 = 'wine2'
} else {
  drink2 = 'water2'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`)
