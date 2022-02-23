// TypeScript

let myString: string = "Abhijeet";
console.log(myString);

/**
 * ?Primitive types in TypeScript
 */

//*string type
let a: string = "Hello, Abhijeet";

//*number type
let b: number = 10;

//*boolean type
let c: boolean = false;

//*null type
let d: null = null;

//*undefined type
// let e:undefined;
//or
let e: undefined = undefined;

//*bigint type
let f: bigint = BigInt(100);

//*symbol type
let g: symbol = Symbol("name");

/**
 * ?Array types in TypeScript
 */

//Examples
const cars: string[] = ["Hyundai", "Honda", "BMW"];
const luckyNumbers: number[] = [1, 2, 3];
const answers: boolean[] = [true, false];

function printCarModels(models: number[]): number {
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

function printCarModel(model: number | string) {
    console.log("My car model is " + model);
}

printCarModel(2009)
//or
printCarModel("2009")

//Example 1: When member don't support common operations
function printCarModelV2(model: string | number) {
    if (typeof model === 'string') {
        console.log("My car model is " + model.toUpperCase());
    } else {
        console.log("My car model is " + model);
    }
}
printCarModelV2(2009)
//or
printCarModelV2("2009")

//Example 1: When member support common operations
function sliceTheInput(x: string[] | string) {
    return x.slice(0, 3);
}
console.log(sliceTheInput("2009"));

/**
 * ?Type Aliases in TypeScript
 */

// Primitive type alias
type ModelNumber = number;
function printCarModelAliasP(model: ModelNumber) {
    console.log("My car model is " + model);
}

printCarModelAliasP(2021)

//Union type alias
type Model = number | string;
type Car = {
    model: number,
    make: string,
    sedan: boolean
}
function printCarDetails(myCar: Car) {
    console.log(`My car is ${myCar.make}`);
    console.log(`My car was launched in ${myCar.model}`);
    console.log(`My car is a ${myCar.sedan ? 'sedan' : 'hatchbag'}`);
}

printCarDetails({
    model: 2021,
    make: "Honda",
    sedan: true
})

/**
 * ?The "Function" type in TypeScript
 */

function printCarDetailsF(callback: Function) {
    callback(2021, "BMW");
}
printCarDetailsF((model: number, make: string) => {
    console.log("Car model is " + model);
    console.log("Car company is " + make);
})

/**
 * ?Interfaces in TypeScript
 */
interface CarI {
    model: number,
    make: string | number,
    sedan: boolean,
    accelerate: () => void;
    decelerate(): void;
}

function printCarDetailsI(myCarObj: CarI) {
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
        console.log("accelerated the car")
    },
    decelerate: () => {
        console.log("decelerated the car")
    }
})

/**
 * ?Object type in TypeScript
 */

function printCarDetailsO(carObj: { make?: string, model: number | "2021" }) {
    console.log(`My car ${carObj.make?.toUpperCase()} was launched in ${carObj.model}`);
}
printCarDetailsO({
    make: "Hyundai",
    model: 2009
})

/**
 * ?Interfaces Vs Type aliases | "Extensibility"
 * Notes:
 *  - Can extend an interface but can't extend a type
 *  - Instead can use intersections(&) to achieve the same
 */

interface CarInterface {
    make: string;
    model: number;
}

interface MustangInterface extends CarInterface {
    drift: boolean;
}

const myCar1: MustangInterface = {
    make: "Ford",
    model: 2005,
    drift: true
}
console.log("MyCar1: " + JSON.stringify(myCar1));

//Type Alias Example
type CarType = {
    make: string,
    model: number
}

type MustangType = CarType & {
    drift: boolean
}
const myCar2: MustangType = {
    make: "Ford",
    model: 2005,
    drift: true
}
console.log("MyCar2: " + JSON.stringify(myCar2));

/**
 * ?Special type | "any" - TypeScript
 */
let car: any = "BMW";
let model: number = 2021;
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

function printCarNameV1(): void {
    console.log("BMW");
}

/**
 * ?Special type | "never" - TypeScript
 * - Function "never" returns anything
 */
//This function throws and exception.
//Hence it never returns a value.
function crashCar(model: number): never {
    throw new Error("Car crashed");
}

//This function terminates the program.
//Hence it never returns a value.
// import { exit } from "process";
// function terminate(process: number): never {
//     exit(process);
// }

let x: number = 10;
let y: string = "ten";
let z: number | string = "ten";

//"never" also appears when nothing is left in a union
function printCarDetailsN(make: number | string) {
    if (typeof make === "string") {
        console.log(make.toUpperCase());
    } else if (typeof make === "number") {
        console.log(make++);
    } else {
        //Here the type of make is "never"
    }
}

/**
 * ?Literal Inference
 */

const carL = {
    make: "Honda" as "Honda" | "Hyundai",
    model: 2009 as 2009 | 2010 | boolean
}