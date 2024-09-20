const module1 = require('./module1')
const calc = require('./calculator')
console.log(module)
console.log(module1)
console.log(module1.name)
module1.greet(module1.name)
module1.sayHello()

console.log(calc.multiply(1,2))

console.log(global.college)