"use strict";
let make_sandwich = (...item) => {
    console.log("We makes Your choice.!");
    item.forEach(item => {
        console.log("-> " + item);
    });
    console.log("Enjoy your Sandwich\n");
};
make_sandwich("Tomato", "Meyonise", "katchup");
make_sandwich("Cucumber", "onion", "meyonise");
make_sandwich("jam", "jelly");
