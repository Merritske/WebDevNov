/*var student = { //= object
  //  key : value
  firstName : "Jack",
  lastName : "Doe"
}
student.age = 29 //om dingen toe te voegen aan object
student["scores"] = [1,2,3] //array in object bijvoegen
console.log(student)
console.log(student.firstName) //Jack
console.log(student["lastName"]) //Doe

const all = {} //object is leeg
all.x = 1 //toevoegen in object
all.y = 2 //toevoegen in object
all.z = 3 //toevoegen in object

const all = {
    x:{}, //object in object
    y:2,
    z:3,
}
all.x.k = 4 //toevoegen in nested object
all.x.l = 5

console.log(all) 
*/

//STRING METHODS
const text = "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. INTECBRUSSEL Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals INTECBRUSSEL Aldus PageMaker die versies van Lorem Ipsum bevatten."
var url = "https://www.intecBrussel.bejkhjgkgkgk"
var company = "intec"
var comp = "        intec    Brussel   "

var printService;
printService = text.length; //return length of text ook spaties worden meegeteld
printService = text.indexOf("INTECBRU") //"16" staat op plaats 143 begint in het begin te zoeken
printService = text.lastIndexOf("INTECBRU") // begint te zoeken van het einde naar het begin maar geeft wel het getal vanaf vanvoor te tellen
printService = text.search("jaren") //zegt op welke positite dit staat 

//printService = text.slice(0,10) // LOREM IPSU vanaf begin tot 10 
printService = text.slice(90,102)
printService = url.slice(12,url.length) // begint te tellen vanaf de "begin string" ""worden niet meegeteld
printService = url.substring(12) //begin aanduiden toont tot einde
printService = text.replace("INTECBRUSSEL","101010") //wordt veranderd in de console.log niet in de text eerste dat het tegenkomt
//regular expression regEx om alle "woorden" in een tekst te vinden => /woord/g
printService = text.replace(/INTECBRUSSEL/g, "01010101")
printService = text.toUpperCase() //alles in blokletters
printService = text.toLowerCase(); //alles in kleine letters
printService = company.concat("Brussel") //voegt twee strings samen
printService = text.concat(company) //kan ook twee texten zijn
printService = comp.trim() //spatie die niet nodig vanvoor en vanachter, niet tussen woorden

printService = comp.replace(/ /g,"").trim() //om spatie tussen de woorden weg te halen


printService = text.charAt(0) //geeft de letter van een bepaalde positie
printService = text.charAt(text.length-1) //om laatste character te geven
//printService = text.length-1 //geeft hoeveel letters er zijn in een text

printService = text[3] //geeft de letter van deze index

var myItems = "laptop, desktop, mobile"
printService = typeof myItems //string
printService = myItems.split(", ") //maakt er een array van
//printService = myItems.split("") //elke letter wordt een arry object

console.log(printService)