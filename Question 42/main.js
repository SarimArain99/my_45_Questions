"use strict";
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
let make_Great = () => {
    magicians.forEach((val) => {
        console.log("the Great", val);
    });
};
make_Great();
