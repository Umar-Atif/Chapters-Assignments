/// Qno.1 Answer
var age = "I am 15 years old";
alert(age);

// Qno.2 Answer
var visit = "You have visited this site 14 times";
alert(visit);

// Qno.3 Answer
var birthYear = 2009;
var dataType = typeof(birthYear);

var birth = document.querySelector("#birth");
birth.innerHTML = " My birth year is " + birthYear + " <br> Data type of my declared variable is " + dataType;

// Qno.4 Answer
var visitorName = prompt("Enter your Name");
var productTitle = prompt("Enter Product Title");
var quantity = prompt("Enter Quantity of Products");

var customer = document.querySelector("#customer");
customer.innerHTML= visitorName + " ordered " +  quantity  +   productTitle + "(s) on XYZ Clothing store ";
