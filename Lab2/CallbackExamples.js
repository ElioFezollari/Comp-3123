//Callback Examples
var callback = () =>{
    console.log("Callback Called")
}

setTimeout(callback,2000);

var print = (name)=>{
    console.log(name)
}       

function printName(print,name){
    print(name)
}

printName(print,"Elio")


let name = "Elio Fezollari";

printName("Elio",(name)=>{
    console.log(name)
})


var countries = ["Albania","USA","England","Canada"]

countries.map((country)=>{
    console.log(country)
})