let Magicians:string[]=["Harry Houdini","David Copperfield","Penn Jillette","Teller","Dynamo"];
let show_magicians=()=>{
    magicians.forEach((val)=>{
        console.log(val);
    });
};

let magicians:string[]=["Harry Houdini","David Copperfield","Penn Jillette","Teller","Dynamo"];
let make_Great=()=>{
    magicians.forEach((val)=>{
        console.log("the Great",val);
    });
};
show_magicians();
make_Great();
