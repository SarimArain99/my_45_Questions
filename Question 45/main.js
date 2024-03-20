"use strict";
let createCar = (manufacturer, modelname, additionalProps) => {
    let carInfo = { manufacturer, modelname };
    if (additionalProps) {
        for (let prop in additionalProps) {
            if (additionalProps.hasOwnProperty(prop)) {
                carInfo[prop] = additionalProps[prop];
            }
        }
    }
    return carInfo;
};
const car1 = createCar('Toyota', 'Corolla', { color: 'red', optionalFeature: 'sunroof' });
console.log(car1);
const car2 = createCar('Ford', 'Mustang', { color: 'blue', horsepower: 450 });
console.log(car2);
