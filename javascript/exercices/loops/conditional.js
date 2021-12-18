//CONDITIONAL STATEMENTS en loops: exercices w3resource

//1. welk integer is het grootst
// let x = 2.5
// let y = 3.1
// if(parseInt(x) > parseInt(y)){
//     console.log(x)
// }else if (parseInt(y) > parseInt(x)){
//     console.log(y)
// }else {
//     console.log("both are equal")
// }


//2. is product + or -
// let x = -2;
// let y = 5;
// let z = 6;

// if (x < 0 && y < 0 && z > 0) {
//     console.log("+")
// } else if (x < 0 && y > 0 && z < 0) {
//     console.log("+")
// } else if (x > 0 && y < 0 && z > 0) {
//     console.log("+")
// } else {
//     console.log("-")
// }


//3. sort van groot naar klein
// let x = [-2, 5, 10, -6,0]
// x.sort(function (a,b){
//     return (b-a)
// })
// console.log(x)

//met conditional statement xyz xzy  yxz yzx  zxy zyx
// let x = 12;
//  let y = 1;
//  let z = 23;
//  //xyz             MET else if statements....
//  if(x>y && y>z){ 
//      console.log( x,"is de grootste",y,"is de middelste", z, "is de kleinste")
//    }
// //xzy
// if(x>y && y<z && x>z){
//     console.log( x,"is de grootste",z,"is de middelste", y, "is de kleinste")
// }
// //yxz
// if(x<y && y>z && x>z)
// { console.log( y,"is de grootste",x,"is de middelste", z, "is de kleinste") 
// }
// //yzx
// if(x<y && y>z && x<z)
// { console.log( y,"is de grootste",z,"is de middelste", x, "is de kleinste") 
// }
// //zxy
// if(x>y && y<z && z>x)
// { console.log( z,"is de grootste",x,"is de middelste", y, "is de kleinste")
//  }
//  //zyx
// if(x<y && y<z){
//      console.log( z,"is de grootste",y,"is de middelste", x, "is de kleinste")}



//4.de grootste van een reeks vinden
// let x = [-2, 5, 10, -6,0]
// let y = x.sort(function(a,b){
//     return (b-a)
// })
// console.log(y[0])

//met conditional statement
// let a = 12;
// let b = 1;
// let c = -223;
// let d = -215;
// let e = -8;
// if(a>b && a>c && a>d && a>e){
// console.log(a)
// }else if((a<b && b>c && b>d && b>e)){
//     console.log(b)
// }else if (a<c && b<c && c>d && c>e){
//     console.log(c)
// }else if (a<d && b<d && c<d && d>e)
// {
//   console.log(d)
// }else console.log(e)


//5. odd or even
// for(let x=0;x<=15;x++){
//     if(x%2 ===0 ){
//         console.log(x, "is even")
//     }else{
//         console.log(x, "is odd")
//     }
// }


// //6. 
// let students = [{
//     name: "David",
//     points: 80
// }, {
//     name: "Vinoth", 
//     points: 77
// }, {
//     name: "Divya",
//      points: 88
// }, {
//     name: "Ishitha", 
//     points: 95
// }, {
//     name: "Thomas", 
//     points: 68
// }]
// //console.log(students[0])//test

//  let average = 0
// for (let x = 0; x < students.length; x++) {
//     let obj = students[x]

//    average += (students[x].points)/students.length
     
//      console.log(obj.points)
    
 
//     //console.log(obj.points)//test
//      if(obj.points <60 ){
//         console.log(obj.name, "you get a'F'")
//     }
//     else if(obj.points <70){
//         console.log(obj.name, "you get a 'D'")
//     } else if(obj.points <80){
//         console.log(obj.name, "you get a 'C'")
       
//     }else if (obj.points < 90){
//  console.log(obj.name, "you get a 'B'")
// }else if(obj.points < 100){
//     console.log(obj.name, "you get a 'A'")

// }else{
//     console.log("come back next year")
// }
// } console.log("The average of all the students: ",average)


// //7.
// for(let i =1; i<=100;i++){
 
//    if( i%3 === 0 && i%5 === 0){
//     console.log("fizzbuzz")
// // }
// // else if(i%5 === 0){
// //     console.log("buzz")
// // }else if(i%3 === 0 ){ 
// //      console.log( "fizz")
// // }
// // else{console.log(i)}
// // } 
   

// //8. SNAP DE OPGAVE NIET
// // 15 
// // Begin met een willekeurig positief geheel getal, vervang het getal door de som van de kwadraten van de cijfers en
// //  herhaal het proces totdat het getal gelijk is aan 1 (waar het blijft), of het blijft eindeloos herhalen 
// //  in een cyclus die geen 1 bevat. Die getallen waarvoor dit proces op 1 eindigt, zijn gelukkige getallen, 
// // terwijl degenen die niet op 1 eindigen ongelukkige getallen zijn (of trieste getallen) count naar beneden tot 5

// //     // let count = 5
// //   function happyNum (num){
// // while(result != 1){

// //    let y = num.toString();

// // let result = y[0]**2 + y[1]**2
// // return result
// //   }
// //   }

// // //count--
// // console.log(happyNum(15))
// // // let result;
// // //     while(result !=1 || count ==5 ){
    
// // // let y = result.toString()

//OPLOSSING 8
// function happy_number(num) 
// {
//     var m, n ;
//     var c = [] ;
 
//     while(num != 1 && c[num] !== true) 
//     {
//         c[num] = true ;
//         m = 0 ;
//         while (num > 0) {
//             n = num % 10 ;
//             m += n * n ;
//             num = (num  - n) / 10 ;
//         }
//         num = m ;
//     }
//     return (num == 1) ;
// }
 
// var cnt = 5;
// var num = 1;
// var f5 = ''; 
// while(cnt-- > 0) 
// {
//     while(!happy_number(num))
//         num++ ;
// f5 = f5+(num + ", ") ;
//     num++ ;
// }
// console.log('First 5 happy numbers are : '+f5);



//9. ARMSTRONG NUMBER
//3**3 + 7**3 + 1**3 = 371
//BIJNA ZELF GEVONDEN

// for(let x = 1; x<10; x++){
//     for(let y = 0; y<10 ;y++){
//         for(let z = 0; z<10; z++){
//             pow = (Math.pow(x,3)+Math.pow(y,3)+Math.pow(z,3))
//             number = (x*100)+(y*10)+z
//             if(pow == number){
//                 console.log("This is an Armstrong number with three digits: ", number)
//             }
//         }
//     }
// }


//10. create a pattern
// for(let i = 0; i<1 ; i++){console.log("*")
//     for(let i = 1; i<2; i++){
//         console.log("**")
//     }
//     for(let i = 2; i<3; i++){
//         console.log("***")
//     }
//     for(let i = 3; i<4; i++){
//         console.log("****")
//     }
//     for(let i = 4; i<5; i++){
//         console.log("*****")
//     }
// }
//ANDERE METHODE
// var x,y,char
// for( x = 1 ; x<=6 ; x++){
//     for( y = 1; y<x ; y++){
     
// char = char + ("*");
        
//     }console.log(char);
//     char = "";
// }


//11.
//MIJN OPLOSSING? KLOPT NIET
// var a,x,y;
// for(x = 1; x<10;x++){
//     for(y = 1 ; y<10;y++){
//             num1 = x/a
//             num2 = y/a
//             if(num1 == num2){
//                 console.log("de grootste gemen deler van ",x, "en", y, "is", a)
//         }
    
//     }
// }
//OPLOSSING
// var a = 12; //First number
// var b = 55;  //Second number 
// var gcd;
// while (a!=b) 
// {
// 	if (a>b)
// 	{
// 		a = a -b;
// 	}
// 	else
// 	{
// 		b = b - a;
// 	}
// }
// gcd = a;
// console.log(gcd);

//12.
// var sum = 0
// for(let x =0 ; x<1000; x++){
    
//       if(x%3==0 || x%5==0){
//           sum += x
//                }
//     }console.log(sum)


