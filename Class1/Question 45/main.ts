let createCar=(manufacturer,  modelname)=>{
    let car={
        manufacturer:manufacturer,
        modelname :modelname,
    };
    return car;
};
let myCar=createCar("Toyta","civic");
console.log(myCar);