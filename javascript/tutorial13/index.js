let btnIncrease = document.querySelector(".btn-primary")
let btnDecrease = document.querySelector(".btn-danger")
let btnReset = document.querySelector(".btn-warning")

let start = document.querySelector(".display-3")
let count=0


btnIncrease.addEventListener("click",increase =>{
     count++
        start.innerHTML = count;
        localStorage.setItem("count",JSON.stringify(count))
       
})

btnDecrease.addEventListener("click",decrease =>{
    count--
       start.innerHTML = count;
       localStorage.setItem("count",JSON.stringify(count))
      
})

btnReset.addEventListener("click", reset =>{
    count =0
       start.innerHTML = count;
       localStorage.setItem("count",JSON.stringify(count))
      
})


 start.innerHTML = JSON.parse(localStorage.getItem("count"))
count = start.innerHTML




console.log()