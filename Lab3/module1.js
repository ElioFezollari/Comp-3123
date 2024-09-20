// Global object
global.college = "George Brown College"

console.log(module)

let name = "Elio Fezollari"

let greet=() => {
    console.log("Hello" + name)
}

function sayHello(){
    console.log("Hello World")
}

module.exports = {name,greet,sayHello}