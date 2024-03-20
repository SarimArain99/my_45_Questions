// Question 15\

let guest:string[]=["Subhan","Syffiyan","Ayan"];
guest.splice(2,1,"Ali");   // "Ayan" is can't making dinner with us So, we are replacing him with "Ali".
guest.forEach((val) => {
     console.log("Assalam u alikum Dear",val,"You are invited at dinner with me at my home"); 
 });
