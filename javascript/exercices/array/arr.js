const students = [
  {
    name : "aaaaa",
    adres : {
      straat : "bbaab",
      nr : "7",
      zip : "2220",
      stad : "jakaka",
  }, telefoon : "455868556",
  geboortedatum : "25 - 2 - 2005",},
  {
    name : "abbbbba",
    adres : {
      straat : "aabbbb",
      nr : "25",
      zip : "2220",
      stad : "Totot",
  }, telefoon : "45589999",
  geboortedatum : "27 - 2 - 2005",},
  {
    name : "cccca",
    adres : {
      straat : "cpakfb",
      nr : "5",
      zip : "2220",
      stad : "jamaaf",
  }, telefoon : "8856956",
  geboortedatum : "25 - 2 - 2005",},
  {
    name : "adddda",
    adres : {
      straat : "ahioarabb",
      nr : "8",
      zip : "2220",
      stad : "jpzmgreeho",
  }, telefoon : "5468856",
  geboortedatum : "25 - 2 - 2005",},
  
]
function ik(naam){
  let result = naam.filter(function(a){
    return a.name =="adddda"
  })
  return result
}
 console.log(ik)
