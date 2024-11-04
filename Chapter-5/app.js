// Qno.1 Answer
var sumDiv = document.querySelector("#sumDiv");
var sum1 = +prompt("Enter First Number for Addition");
var sum2 = +prompt("Enter Second Number for Addition");

sumDiv.innerHTML = `Sum of ${sum1} and ${sum2} is ${sum1 + sum2}`;

// Qno.2 Answer

//Subtraction
var subDiv = document.querySelector("#subDiv");
var sub1 = +prompt("Enter First Number for Subtraction");
var sub2 = +prompt("Enter Second Number for Subtraction");

subDiv.innerHTML = `Subtraction of ${sub1} and ${sub2} is ${sub1 - sub2}`;

//Multiplication
var mulDiv = document.querySelector("#mulDiv");
var mul1 = +prompt("Enter First Number for Multiplication");
var mul2 = +prompt("Enter Second Number for Multiplication");

mulDiv.innerHTML = `Multiplication of ${mul1} and ${mul2} is ${mul1 * mul2}`;

//Division
var divDiv = document.querySelector("#divDiv");
var div1 = +prompt("Enter First Number for Division");
var div2 = +prompt("Enter Second Number for Division");

divDiv.innerHTML = `Division of ${div1} and ${div2} is ${div1 / div2}`;

//Modulus
var modDiv = document.querySelector("#modDiv");
var mod1 = +prompt("Enter First Number for Modulus");
var mod2 = +prompt("Enter Second Number for Modulus");

modDiv.innerHTML = `Modulus of ${mod1} and ${mod2} is ${mod1 % mod2}`;

// Qno.3 Answer

//a)
var variable = "";

//b)
var div1 = document.querySelector("#div1");
div1.innerHTML = "Value after variable declaration is: " + variable;

//c)
variable = 5

//d)
var div2 = document.querySelector("#div2");
div2.innerHTML = "Initial value: " + variable;

//e)
var increament = ++variable

//f)
var div3 = document.querySelector("#div3");
div3.innerHTML = "Value after increament is: " + increament;

//g)
var addition = increament + 7;

//h)
var div4 = document.querySelector("#div4");
div4.innerHTML = "Value after addition is: " + addition;

//i)
var decreament = --addition;

//j)
var div5 = document.querySelector("#div5");
div5.innerHTML = "Value after decreament is: " + decreament;

//k)
var remainder = decreament / 3;

//l)
var div6 = document.querySelector("#div6");
var output = remainder;
div6.innerHTML = "The remainder is: " + output;

// Qno.4 Answer

var tickets = document.querySelector("#ticketsDiv");
var ticketPrice = 600;
var quantityofTickets = 5;

tickets.innerHTML = `Total cost to buy ${quantityofTickets} tickets to a movie is ${ticketPrice * quantityofTickets}PKR`

// Qno.5 Answer

var tableNum = prompt("Enter any Number");
var tableDIv = document.querySelector("#tableDiv");

for(var i = 1; i <= 10; i++){
    tableDIv.innerHTML += `${tableNum} x ${i} = ${tableNum * i} <br>`
}