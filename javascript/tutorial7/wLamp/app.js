


let control = document.getElementById('control')
let light_control = false;
let lamp = document.getElementById('lamp')
//let lamp2 = document.getElementById('lamp2')
let jumbo = document.getElementById('jumbo')
let title = document.getElementById('title')

function lightSwitch(){
    if(!light_control){// true
        light_control= true
        console.log('Lamp is on!!!!')
     title.style.color = "white"
        lamp.src='yellow-light-bulb-11533048327xi88wag0zp.png'
        jumbo.style.background='black'
        
    }else{
        light_control=false
        console.log('Lamp is off!!!!')
    title.style.color = "black"
    lamp.src='png-transparent-light-bulb-illustration-incandescent-light-bulb-lamp-bulb-candle-product-light-thumbnail.png'
        jumbo.style.background='#e9ecef'
    }
}
