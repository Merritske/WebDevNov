
//let allButtons = document.querySelectorAll(".key") //buttons apart selecteren

// allButtons.forEach(el=>{
//     console.log(el)
//   console.log(el.getAttribute("data-key")) //value of attribute

//    //set action
//    el.addEventListener("click", function(e){
//        console.log("click")
//        //play audio
//    })
// })

// let notes = document.querySelectorAll('audio')

// function PlayAudio(keyNumber){ //audio
// notes.forEach(audio=>{
//     let getKeyOfAudio = audio.getAttribute("data-key")
//     // console.log(getKeyOfAudio)
//     // audio.play()
//     if(getKeyOfAudio == keyNumber ){
//         audio.play()
// }

//     })
// }
// allButtons.forEach(el =>{ //button
//     el.addEventListener("click", function(e){ //eerst actie, daarna callbackfunction
//         e.preventDefault()
//         let getKey = el.getAttribute('data-key')
//         PlayAudio(getKey)
//     })
// })
//PlayAudio zit in functie allButtons om de 2 te linken,
// je kan data-key niet ineens selecteren want de sound moet aan de button gelinkt worden via het nummer


//KEYDOWN

let allButtons = document.querySelectorAll(".key")
let notes = document.querySelectorAll('audio')
let keySound = [65,83,68,70,71,72,74,75,76]

// function PlayAudio(keyNumber){ //audio
// notes.forEach(audio=>{
//     let getKeyOfAudio = audio.getAttribute("data-key")
//     // console.log(getKeyOfAudio)
//     // audio.play()
//     if(getKeyOfAudio == keyNumber ){
//         audio.play()
// }

//     })
// }
 

        document.addEventListener('keydown', (e) =>{ 
            console.log("hello")
            notes.forEach(audio=>{
                let getKeyOfAudio = audio.getAttribute("data-key")
                // console.log(getKeyOfAudio)
                
              if(e.key ==="a"){
                   audio.play(keySound[0])
              }
              if(e.key ==="s"){
                audio.play(keySound[1])
           }    
           if(e.key ==="d"){
            audio.play(keySound[2])
       }
       if(e.key ==="f"){
        audio.play(keySound[3])
   }
   if(e.key ==="g"){
    audio.play(keySound[4])
}
if(e.key ==="h"){
    audio.play(keySound[5])
}

if(e.key ==="j"){
 audio.play(keySound[6])
}

if(e.key ==="k"){
 audio.play(keySound[7])
}

if(e.key ==="l"){
 audio.play(keySound[8])
}
             audio.play()
            
                })
            }
            //eerst actie, daarna callbackfunction
    //         e.preventDefault()
    //         let getKey = vve.getAttribute('data-key')
    //    PlayAudio(getKey)
        )
    
 console.log(typeof letter)


//NU NOG veranderen om elke A een A te laten klinken




//LIEDJE MAKEN



//dat hierboven niet hiervoor gebruiken

// function PlaySong (){
//     if(keyNumber === "65"){
//         audio.play("65", "70")
//     }
// }
// PlaySong("65")



