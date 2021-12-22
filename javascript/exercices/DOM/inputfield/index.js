
//script voor Input
// let _name = document.querySelector("#name")
// let age = document.querySelector("#age")
// let btn = document.querySelector("#btn")
// let local = document.querySelector("#local")

// btn.onclick = function(){
//     const key = _name.value;
//     const value = age.value;

//     if(key && value){
//         localStorage.setItem(key, value)
       
//     }
// local.innerHTML += `${key}: ${value}`

// }

// for(let i=0; i<localStorage.length; i++){
// const key = localStorage.key(i)
// const value = localStorage.getItem(key)

// local.innerHTML += ` ${key}: ${value}<br>`

// }



//script voor Local storage
function mySave(){
    var myContent = document.getElementById("myTextArea").value;
    localStorage.setItem("myContent", myContent);
}
function myLoad (){
    var myContent = localStorage.getItem("myContent")
    document.getElementById("myTextArea").value = myContent
}

