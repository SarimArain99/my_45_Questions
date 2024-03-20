let animals:string[]=["Cat","Dog","lion"];
for(let i=0; i<animals.length; i++){
    console.log(animals[i]);
}
for(let i=0; i<animals.length; i++){
let animal=animals[i];
    if(animal=="Dog"){
        console.log(`A ${animal} would make a Gerat pet`);
    }else if(animal=="Cat"){
        console.log(`${animal} is a lazy animal`);
    }else{
        console.log(`A ${animal} is a bravest animal in the forest`);
    }
};
console.log(` (${animals}), all these animals have 4 legs ,two eyes and have a tail`);