exports.add  = (a,b) =>  a+b

exports.subdivide = (a,b) =>a-b

exports.multiply = (a,b) =>  a*b

const divide = (a,b) => a/b

module.exports={...exports,divide}