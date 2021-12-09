


// function user(){
//     let button =document.getElementById("btn")

//     let input = document.getElementById("input") 

//  return (input.value ==="admin" ? alert("welcome boss") : alert("hello, user"))

// }
let leden = [
    {
        name: "An",
        role: "admin",
        ww: "Boss"
    },
    {
        name: "Els",
        role: "lid",
        ww: "volger"
    }, {
        name: "Bart",
        role: "lid",
        ww: "volger"
    }, {
        name: "Jan",
        role: "lid",
        ww: "volger"
    }, {
        name: "Rik",
        role: "lid",
        ww: "volger"
    }, {
        name: "Maria",
        role: "lid",
        ww: "volger"
    }

]
var button = document.getElementById("btn")
//kijken user is admin
function isadmin(obj) {
    return obj.name === "An" ? true : false
}


var input = document.getElementById("input")
var inputWacht = document.getElementById("inputW")
/*
function btn_click() {

    leden.forEach(function (user) {
        //console.log(user.name) //control values here
        //  if (input.value === user.name && inputWacht.value === user.ww && isadmin(user)) { ///FOUT
        //      alert("Hello Boss, Have a nice day!")


        // } else if (input.value === "" && inputWacht.value === "") {
        //     alert("GO HOME!!!!")

        // }
        
        if (input.value != "" && inputWacht.value != "") {
            if (input.value === user.name && inputWacht.value === user.ww) { //blijft in loop steken van forEach
               
                console.log('user is exists')
                
                if (user.role === 'admin') {
                    console.log('this user is admin')
                    alert("welcome Boss, have a nice day")

                }

                else {
                    console.log('this is just user')
                    alert("work hard")

                }
            }

        } else{
          
       alert('you must fill the inputs') }
        if( input.value !== user.name){
                    alert ("put in the correct username")
                }else 
                  alert  ("put in the correct wachtwoord")
                

    })

}
*/
//andere oplossing
//MET FILTER
function btn_click() {
    let getUser = leden.filter(user => user.name === input.value && user.ww === inputWacht.value) //controle of in de ledenlijst (array) voorkomt

let isUserexists = getUser[0] ===undefined? 
     document.getElementById("demo").innerHTML = "you are not welcome here, go home" :"" //melding dat de input niet in de ledenlijst voorkomt

   

    console.log(...getUser)
    if (getUser[0].role === "admin") {
        console.log("welcome admin")
        document.getElementById("demo").innerHTML = "Welcome Boss, have a nice day"
    } else {
        console.log("Welcome user")
        document.getElementById("demo").innerHTML = "We have a lot of work, work hard, no play!"

    
}


}



