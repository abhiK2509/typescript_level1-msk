"use strict";
// TypeScript
let myString = "Abhijeet";
console.log(myString);
/**
 * ?Primitive types in TypeScript
 */
//*string type
let a = "Hello, Abhijeet";
//*number type
let b = 10;
//*boolean type
let c = false;
//*null type
let d = null;
//*undefined type
// let e:undefined;
//or
let e = undefined;
//*bigint type
let f = BigInt(100);
//*symbol type
let g = Symbol("name");
/**
 * ?Array types in TypeScript
 */
//Examples
const cars = ["Hyundai", "Honda", "BMW"];
const luckyNumbers = [1, 2, 3];
const answers = [true, false];
function printCarModels(models) {
    models.forEach(model => {
        console.log(model);
    });
    let upcomingModel = models[0] + 1;
    return upcomingModel;
}
let upcomingModel = printCarModels([2021, 2020, 2018]);
console.log("Next upcoming model is " + upcomingModel);
/**
 * ?Union Types in TypeScript
 */
function printCarModel(model) {
    console.log("My car model is " + model);
}
printCarModel(2009);
//or
printCarModel("2009");
//Example 1: When member don't support common operations
function printCarModelV2(model) {
    if (typeof model === 'string') {
        console.log("My car model is " + model.toUpperCase());
    }
    else {
        console.log("My car model is " + model);
    }
}
printCarModelV2(2009);
//or
printCarModelV2("2009");
//Example 1: When member support common operations
function sliceTheInput(x) {
    return x.slice(0, 3);
}
console.log(sliceTheInput("2009"));
function printCarModelAliasP(model) {
    console.log("My car model is " + model);
}
printCarModelAliasP(2021);
function printCarDetails(myCar) {
    console.log(`My car is ${myCar.make}`);
    console.log(`My car was launched in ${myCar.model}`);
    console.log(`My car is a ${myCar.sedan ? 'sedan' : 'hatchbag'}`);
}
printCarDetails({
    model: 2021,
    make: "Honda",
    sedan: true
});
/**
 * ?The "Function" type in TypeScript
 */
function printCarDetailsF(callback) {
    callback(2021, "BMW");
}
printCarDetailsF((model, make) => {
    console.log("Car model is " + model);
    console.log("Car company is " + make);
});
function printCarDetailsI(myCarObj) {
    console.log(`My car is ${myCarObj.make}`);
    console.log(`My car was launched in ${myCarObj.model}`);
    myCarObj.accelerate();
    myCarObj.decelerate();
}
printCarDetailsI({
    model: 2009,
    make: "Hyndai",
    sedan: false,
    accelerate: () => {
        console.log("accelerated the car");
    },
    decelerate: () => {
        console.log("decelerated the car");
    }
});
/**
 * ?Object type in TypeScript
 */
function printCarDetailsO(carObj) {
    var _a;
    console.log(`My car ${(_a = carObj.make) === null || _a === void 0 ? void 0 : _a.toUpperCase()} was launched in ${carObj.model}`);
}
printCarDetailsO({
    make: "Hyundai",
    model: 2009
});
const myCar1 = {
    make: "Ford",
    model: 2005,
    drift: true
};
console.log("MyCar1: " + JSON.stringify(myCar1));
const myCar2 = {
    make: "Ford",
    model: 2005,
    drift: true
};
console.log("MyCar2: " + JSON.stringify(myCar2));
/**
 * ?Special type | "any" - TypeScript
 */
let car = "BMW";
let model = 2021;
car = model;
console.log(car);
/**
 * ?Special type | "unknown" - TypeScript
 */
// let ele: unknown = window.document.getElementById("my-element");
// function getLatestCarModelV1(models: any) {
//     return models[0]
// }
// function getLatestCarModelV2(models: unknown) {
//     return models[0]
// }
/**
 * ?Special type | "void" - TypeScript
 * - Function returns as void
 */
function printCarNameV1() {
    console.log("BMW");
}
/**
 * ?Special type | "never" - TypeScript
 * - Function "never" returns anything
 */
//This function throws and exception.
//Hence it never returns a value.
function crashCar(model) {
    throw new Error("Car crashed");
}
//This function terminates the program.
//Hence it never returns a value.
// import { exit } from "process";
// function terminate(process: number): never {
//     exit(process);
// }
let x = 10;
let y = "ten";
let z = "ten";
//"never" also appears when nothing is left in a union
function printCarDetailsN(make) {
    if (typeof make === "string") {
        console.log(make.toUpperCase());
    }
    else if (typeof make === "number") {
        console.log(make++);
    }
    else {
        //Here the type of make is "never"
    }
}
