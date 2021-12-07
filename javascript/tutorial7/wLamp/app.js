
var lamp = document.getElementById("lamp off")

let control = document.getElementById('control')
let light_control = false;
let lamp = document.getElementById('lamp')
let jumbo = document.getElementById('jumbo')

function lightSwitch(){
    if(!light_control){// true
        light_control= true
        console.log('Lamp is on!!!!')
       control.src= 
        lamp.src='https://toppng.com//public/uploads/preview/lamp-vector-idea-street-light-115628923387naqgyphbv.png" alt="" style="width:20%'
        jumbo.style.background='black'
    }else{
        light_control=false
        console.log('Lamp is off!!!!')
        
        lamp.src='https://toppng.com//public/uploads/preview/lamp-vector-idea-street-light-115628923387naqgyphbv.png" alt="" style="width:20%'
        jumbo.style.background='#e9ecef'
    }
}