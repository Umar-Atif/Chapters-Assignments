//Qno.1 Answer
var name = "Umar" , age = 15 , isLoggedIn = true;

//Qno.2 Answer

// legal variables
var myName;
var _lastName;
var userName;
var $price;
var myName2;

// illegal variables
// var 2myName;
// var last-Name;
// var user Name;
// var function;
// var @myName;

//Qno.3 Answer

// Variables
var numbers = "numbers";
var comma = ",";
var dollar = "$";
var underScore = "_";
var letters = "letter"
var sensitive = "sensitive"
var key = "keywords"

// a)
var head1 = document.querySelector("#head1");
head1.innerHTML = " Rules for naming JS variables ";

// b)
var p1 = document.querySelector("#p1");
p1.innerHTML = " Variables names can only contain, " + numbers + comma + dollar + " and " + underScore + " . For example $my_1stVariable";

// c)
var p2 = document.querySelector("#p2");
p2.innerHTML = " Variables must begin with a " + letters + " , " + dollar + " or " + underScore + " . For example $name, _name or name";

// d)
var p3 = document.querySelector("#p3");
p3.innerHTML = " Variable names are case " + sensitive;

// e)
var p4 = document.querySelector("#p4");
p4.innerHTML = " Variable names should not be JS " + key;