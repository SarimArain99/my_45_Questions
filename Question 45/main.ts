type car={
    manufacturer:string,
    modelname :string,
    [key :string]:any,
};
let createCar=(manufacturer:string,  modelname:string, additionalProps?: { [key: string]: any }):car=>{
    let carInfo:car={manufacturer,modelname};
    if(additionalProps){
        for(let prop in additionalProps){
            if(additionalProps.hasOwnProperty(prop)){
                carInfo[prop]=additionalProps[prop]
            }
        }
    }
   return carInfo;
};
const car1 = createCar('Toyota', 'Corolla', { color: 'red', optionalFeature: 'sunroof' });
console.log(car1);

const car2 = createCar('Ford', 'Mustang', { color: 'blue', horsepower: 450 });
console.log(car2);