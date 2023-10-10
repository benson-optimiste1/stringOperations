/*

exemple variables

*/

let firstName = 'Todd'
let age = 25
let str = 'hello Javascript students!'
let str2 = '     hello!   '
let str3 = ' Hello Level Up Students' 



console.log(`hello ${firstName}. You are ${age} today!`)
console.log(str.length) // 26
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str2.trim()) // hello!
console.log(str3.replace())


let searchterm = 'level'
str3.substring(6,14) // Level Up
str3.startsWith(searchterm) // false
str3.endsWith(searchterm) // true
str3.includes(searchterm) // true
str3.indexOf(searchterm) // 6



let words = str3.split('')
// ['hello', 'leve up', 'students!']





