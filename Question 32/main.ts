let current_users:string[]=["Subhan","Suffiyan","Ayan","Ahtisham","Naveed"];
let new_users:string[]=["Baber","Ayan","Naveed","Rizwan","Shaheen"];

let lower_crr_uesrs:string[]=current_users.map(user=> user.toLowerCase());
new_users.forEach(newUser=>{
  let  lower_new_user:string=newUser.toLowerCase();
  if(lower_crr_uesrs.includes(lower_new_user)){
    console.log(`The username "${newUser}" is already taken.You will need to enter a new username.`)
  }else{
    console.log(`the username ${newUser} is available`);
  }
});