/*
teerling[0].src = "dice1.png";
teerling[1].src = "dice2.png";
teerling[2].src = "dice3.png";
teerling[3].src = "dice4.png";
teerling[4].src = "dice5.png";
teerling[5].src = "dice6.png";
*/
/*
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
*/
//Andere mogelijke oplossing
var button = document.getElementById('diceRollerbutton');
var placeholder1 = document.getElementById("placeholder1")
var placeholder2 = document.getElementById("placeholder2")
button.onclick = function (){

    result = Math.random()
    result = Math.round(Math.random()*10)
    
    function getRndInteger(min,max){
        return Math.round(Math.random() * (max - min) ) +min;
    }
    
    var images = [

        '<img src="dice1.png" alt="" />',
    
        '<img src="dice2.png" alt="" />',
    
        '<img src="dice3.png" alt="" />',
    
        '<img src="dice4.png" alt="" />',
    
        '<img src="dice5.png" alt="" />',
    
        '<img src="dice6.png" alt="" />',
    
      ];
    result = getRndInteger(90,100)
    let getRange1 = getRndInteger(0,5)
    let getRange2 = getRndInteger(0,5)
   
    result1 = images[getRange1]
    result2 = images[getRange2]  

    placeholder1.innerHTML = result1
    placeholder2.innerHTML = result2
}