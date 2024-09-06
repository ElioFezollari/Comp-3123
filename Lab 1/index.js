console.log('Hello Elio')


let a = 10
let b = 20
b=100
// var b = 20

// Object Literal
var student = { 
    100:'One Hundreed',
    "String student":"String",
    studentId:1,
    studentName:"John",
    studentAge:20,
    city:"New York"
}

console.log(student)
console.log(student.studentName)
console.log(student[100])
cnsole.log(student["String student"])
console.log(student.studentName)
console.log(typeof student)

for(let key in student){
    console.log(`${key} -> ${student[key]}`)  // <- This can be used because numbers cannot be used in . 
}


var emp={
    empId:1,
    empName:"John",
    empAge:20,
    empCity: "New York"
}

const {empId,empName,empAge,empCity} = emp
let result = "Pass"

var newEmp  = {
    empId,
    empName,
    empAge,
    empCity
}

let newEmp = {
    ...emp,
    result
}


