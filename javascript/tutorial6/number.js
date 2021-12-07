//number method
/* Number()
parseInt()
parseFloat()
toFixed()
isFinite()
*/

var result;

result = Number("10"); //convert it to real/integer number
result = parseInt("11") //convert it to integer number
result = parseFloat("10,4") //convert it to float-number convert it to number

result = isFinite("123") //true
result = isFinite(123) //true
result = isFinite("Jack") //false it's not a number
result = isFinite() //false
result = isFinite(-1) //true
result = isFinite(0) //true

var laptop_price = 29.9945646;
result = laptop_price.toFixed(2); // geeft twee cijfers na de komma -> 29.99
result = laptop_price.toFixed(4); // 29.9946
result = laptop_price.toFixed(0); //30

console.log(result)