"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number === 1) {
        console.log(number + "st");
    }
    else if (number === 2) {
        console.log(number + "nd");
    }
    else if ((number === 3)) {
        console.log(number + "rd");
    }
    else {
        console.log(number + "th");
    }
}
;
