let Coffee: {
    name: string,
    price: number,
    isHot: boolean,
}


Coffee = {

    name: "StrongCoffe",
    price: 20,
    isHot: true
}

type Dalgona = {
    name: string,
    price: number,
    ingredients: string[],
}

let DalgonaCoffee: Dalgona = {
    name: "Dalgona Coffee",
    price: 30,
    ingredients: ["Coffee", "Sugar", "Milk"]
}

type cup = { size: string }
let Othercup: cup = { size: "Large" }

let smallCup = { size: "Small", material: "Plastic" }

Othercup: smallCup

type brew = { brewNum: number }
const brewcoffee = { brewNum: 5, material: "arabia" }
let myBrew: brew = brewcoffee;

type Beverage = {
    price: number,
    isHot: boolean,
    name: string,
}

const myBeverage = (update: Partial<Beverage>) => {
    console.log("Updating beverage with", update);
}

myBeverage({ price: 25 });