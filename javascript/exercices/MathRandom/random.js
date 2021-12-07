/*
teerling[0].src = "dice1.png";
teerling[1].src = "dice2.png";
teerling[2].src = "dice3.png";
teerling[3].src = "dice4.png";
teerling[4].src = "dice5.png";
teerling[5].src = "dice6.png";
*/

 let result1 
 let result2 
 
 function worp(){
    return Math.floor(Math.random()*6)+1
    
}

function clickHandler(){
    result1 = worp()
    result2 = worp()

    //document.getElementById("diceRollerbutton").innerHTML = `${teerling.worp()}`
  document.getElementById("placeholder1").innerHTML = `<img src="dice${result1}.png" width="100" heigth ="100"/>`
 document.getElementById("placeholder2").innerHTML = `<img src="dice${result2}.png" width="100" heigth ="100"/>`
console.log(result1, result2)
} 