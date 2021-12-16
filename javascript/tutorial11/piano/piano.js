
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




//LIEDJE MAKEN
let allButtons = document.querySelectorAll(".key")
let notes = document.querySelectorAll('audio')

function PlayAudio(keyNumber){ //audio
notes.forEach(audio=>{
    let getKeyOfAudio = audio.getAttribute("data-key")
    // console.log(getKeyOfAudio)
    // audio.play()
    if(getKeyOfAudio == keyNumber ){
        audio.play()
}

    })
}
allButtons.forEach(el =>{ //button
    el.addEventListener("click", function(e){ //eerst actie, daarna callbackfunction
        e.preventDefault()
        let getKey = el.getAttribute('data-key')
        PlayAudio(getKey)
        
    })
})
//dat hierboven niet hiervoor gebruiken

function PlaySong (){
    if(keyNumber === "65"){
        audio.play("65", "70")
    }
}
PlaySong("65")



