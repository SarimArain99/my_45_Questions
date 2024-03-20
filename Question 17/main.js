"use strict";
//Question 17
console.log("Sorry! I can invite only two people for dinner.");
let guests = ['Ahad', 'Subhan', 'Naveed', 'Syffiyan', 'Ali', 'Hammas'];
while (guests.length > 2) {
    let removeGuests = guests.pop();
    console.log(`Sorry ${removeGuests} I Can't invite you at dinner`);
}
;
guests.forEach(guests => {
    console.log(`Dear ${guests} yor are invited at dinner`);
});
guests.splice(0, guests.length);
console.log(guests);
