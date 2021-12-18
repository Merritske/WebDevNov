//OEFENINGEN VAN JAVASCRIPT.INFO
//PUT FIRST LETTER TO CAPITAL
// let x = "john"
// let y = x[0].toUpperCase();
// let xNew = x.replace(x[0],y)
// console.log(xNew) //John

//CHECK SPAM
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
  
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }
  
//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );

   let str = 'How are you doing today my love? Let\'s hang out together'
   function truncate (str, maxlength){
       return (str.length > maxlength)? str.slice(0,maxlength-1)+"....": str;
   }console.log(truncate(str,26))
