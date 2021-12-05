//integer properties tov niet integer en de rangschikking
let codes = {
    "+49" : "Germany",
    "+32" : "Belgium",
    "+44" : "Great-Brittanie",
    "+1" : "USA",
}
for(let code in codes){
    console.log(+code)
}
//andere rangschikking dan hierboven
/*let codes = {
    "49" : "Germany",
    "32" : "Belgium",
    "44" : "Great-Brittanie",
    "1" : "USA",
}
for(let code in codes){
    console.log(code)
}*/


//inhoud van een object tonen
let user= {
    name: "John",
    surname : "Smith",
    name : "Pete",
}
console.log(user)


//optellen gegevens in object
let salaries = {
    John : 100,
    Ann: 160,
    Pete : 130,
    Lies: 200,
}
let sum = 0;
for(let key in salaries){
    sum +=salaries[key];
}
console.log(sum)


//om getallen te vermenigvuldigen, ik weet niet of dit wel klopt
/*let menu = {
    width : 200,
    height : 300,
    title : "My Menu"
}
function multiplyNumber(obj){
    for(let key in obj){
if (typeof obj[key] == "number"){
    obj[key] *= 2;
}
}
}
*/

//create an object calculator with 3 methods : read(), sum(), mul()
/*let calculator = {
    read (){
        this.a = +prompt("a?",0)
        this.b = +prompt("b?",0)
    },
    sum(){
return this.a + this.b
    },
    mul (){
        return this.a* this.b
    }
}
calculator.read()
alert(calculator.sum())
alert(calculator.mul())
*/

//ladder object, na een deel actions het resultaat weten
let ladder = {
    step : 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this
    },
    showStep: function(){
        console.log(this.step);
        return this;
    }
}
ladder.up().up().down().up().up().showStep(); 
//3 "showStep()" niet vergeten anders wordt er niets getoond


//ingegeven getallen optellen
function Accumulator(startingvalue){
    this.value = startingvalue;
    this.read = function (){
        this.value += +prompt("how much to add",0)
    }
}

let accumulator = new Accumulator(0)
accumulator.read()
accumulator.read()
alert(accumulator.value)



