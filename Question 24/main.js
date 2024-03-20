"use strict";
//Question 24
// Tests for equality and inequality with strings
let favoriteFruit = 'apple';
console.log("Is favoriteFruit == 'apple'? I predict True.");
console.log(favoriteFruit == 'apple'); // True
//Tests using the lower case function
let favoriteCity = 'Karachi';
console.log("Is favoriteCity.toLowerCase() == 'new york'? I predict True.");
console.log(favoriteCity.toLowerCase() == 'karachi'); // True
console.log("Is favoriteCity.toLowerCase() == 'london'? I predict False.");
console.log(favoriteCity.toLowerCase() == 'lahore'); // False
//Equality and Inequality, Greater Than and Less Than, Greater Than or Equal To, and Less Than or Equal To
let temperature = 75;
console.log("Is temperature == 75? I predict True.");
console.log(temperature == 75); // True
console.log("Is temperature != 100? I predict True.");
console.log(temperature != 100); // True
console.log("Is temperature > 70? I predict True.");
console.log(temperature > 70); // True
console.log("Is temperature < 80? I predict True.");
console.log(temperature < 80); // True
console.log("Is temperature >= 75? I predict True.");
console.log(temperature >= 75); // True
console.log("Is temperature <= 74? I predict False.");
console.log(temperature <= 74); // False
//"And" and "Or"
let age = 20;
let myName = "Sarim";
console.log("Is age > 18 and name == 'Sarim'? I predict True.");
console.log(age > 18 && myName == "Sarim"); // True
console.log("Is age < 18 or name == 'Sarim'? I predict True.");
console.log(age < 18 || myName == "Sarim"); // True
//Item is in an Array
let fruits = ['apple', 'banana', 'grape'];
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple')); // True
console.log("Is 'orange' in fruits? I predict False.");
console.log(fruits.includes('orange')); // False
// Item is Not in an Array
console.log("Is 'mango' not in fruits? I predict True.");
console.log(!fruits.includes('mango')); // True
console.log("Is 'banana' not in fruits? I predict False.");
console.log(!fruits.includes('banana')); // False
