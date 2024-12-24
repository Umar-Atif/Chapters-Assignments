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

// Qno.6 Answer

var input1 = document.querySelector("#input1");
var temperatureDiv = document.querySelector("#temperatureDiv");
var select = document.querySelector("#selection");

function convert() {
    if (select.value == "celcius") {
        temperatureDiv.innerHTML += `${input1.value}°C is ${(input1.value * 9 / 5) + 32}°F <br>`
    }
    else{
        temperatureDiv.innerHTML +=`${input1.value}°F is ${(input1.value - 32) * 5 / 9}°C <br>`
    }
}

// Qno.7 Answer

var price1 = 650;
var price2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;

var totalDiv1 = document.querySelector(".totalDiv1");

var total1 = price1 * quantity1;
var total2 = price2 * quantity2;

totalDiv1.innerHTML = `
<p style="margin: 0;">Price of item 1 is ${price1}</p>
<p style="margin: 0;">Quantity of item 1 is ${quantity1}</p>
<p style="margin: 0;">Price of item 2 is ${price2}</p>
<p style="margin: 0;">Quantity of 2 item is ${quantity2}</p>
<p style="margin: 0;">Shipping Charges ${shippingCharges}</p>
<br>
<p style="margin: 0;">Total cost of your order is ${total1 + total2 + shippingCharges}</p>`

// Qno.8 Answer

var totalMarks = 980;
var marksObtained = 804;
var percentage = marksObtained * 100 / totalMarks;

var totalDiv2 = document.querySelector(".totalDiv2");

totalDiv2.innerHTML = `
<p style="margin: 0;">Total marks: ${totalMarks}</p>
<p style="margin: 0;">Marks obtained: ${marksObtained}</p>
<p style="margin: 0;">Percentage: ${percentage}%</p>`

// Qno.9 Answer

var dollar = 10;
var riyal = 25;
var dollarToPkr = 104.80
var riyalToPkr = 28;

var dollarConvertToPkr = dollar * dollarToPkr;
var riyalConvertToPkr = riyal * riyalToPkr;

var currencyDiv = document.querySelector(".currencyDiv");

currencyDiv.innerHTML = `Total Currency in PKR: ${dollarConvertToPkr + riyalConvertToPkr}`

// Qno.10 Answer

var arithmetic = 0 + 5 * 10 / 2

var arithmeticDiv = document.querySelector(".arithmeticDiv");

arithmeticDiv.innerHTML = `Arithmetic Expression: ${arithmetic}`

// Qno.11 Answer

var currentYear = 2016;
var birthYear = 1992;
var yourAge = currentYear - birthYear;

var birthAgeDiv = document.querySelector(".birthAgeDiv");

birthAgeDiv.innerHTML = `
<p style="margin: 0;">Current Year: ${currentYear}</p>
<p style="margin: 0;">Birth Year: ${birthYear}</p>
<p style="margin: 0;">Your Age is: ${yourAge}</p>`

// Qno.12 Answer

var π = 3.142
var radius = 20;
var radiusSquare = radius * radius;
var circumference = 2 * π * radius;
var area = π * radiusSquare;

var circleDiv = document.querySelector(".circleDiv");

circleDiv.innerHTML = `
<p style="margin: 0;">Radius of a circle: ${radius}</p>
<p style="margin: 0;">The circumference is: ${circumference}</p>
<p style="margin: 0;">The area is: ${area}</p>`

// Qno.13 Answer

var favouriteSnack = 'chocolate chip'
var currentAge = 15;
var maximumAge = 65;
var amountOfSnacks = 3;

var yearsLeft = maximumAge - currentAge;
var totalSnacks = yearsLeft * amountOfSnacks;

var calculatorDiv = document.querySelector(".calculatorDiv");

calculatorDiv.innerHTML = `
<p style="margin: 0;">Favourite Snack: ${favouriteSnack}</p>
<p style="margin: 0;">Current age: ${currentAge}</p>
<p style="margin: 0;">Estimated Maximum Age: ${maximumAge}</p>
<p style="margin: 0;">Amount of snacks per day: ${amountOfSnacks}</p>
<p style="margin: 0;">You will need ${totalSnacks} ${favouriteSnack} to last you until the ripe old age is ${maximumAge}</p>`