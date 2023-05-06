const names = require('./4-names')
console.log(names)
const sayHi = require('./5-utils')
const data= require('./6-alternative-flavour')
console.log(data)

sayHi('Susan')
//sayHi(john) wont work...try

sayHi(names.john)
