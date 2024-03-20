//Question 16

let guest:string[]=["Subhan","Syffiyan","Ali"];
guest.unshift("Ahad");
guest.splice(2,0,"Naveed");
guest.push("Hammas");
console.log("hurrah.! We have found a bigger dinner at my home we'll waiting for you all");
guest.forEach((val)=>{
    console.log(`Assalam u alikum Dear '${val}' You are invited at dinner with me at my home`);
});
