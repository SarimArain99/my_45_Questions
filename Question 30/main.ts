//Question 30
let usernames=["admin","Sarim","Subhan","Sufyan","Naveed"];
for(let i=0 ; i<usernames.length ; i++){
    if(usernames[i]==="admin"){
        console.log(`Hello Admin,would you like to see a status report?`)
    }else{
        console.log(`Hey ${usernames[i]} welcome to the website.`);
    }
};
