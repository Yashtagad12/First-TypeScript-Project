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

type Chaiorder = {
    name?: string;
    quantiy?: number;
}

const placeOrder = (chai: Required<Chaiorder>) => {
    console.log(chai);
}

placeOrder({ name: "Chai", quantiy: 2 });


type chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type BasicChaiInfo = Pick<chai, "name" | "price">;

const ChaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

type chaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[];
}

type PublicChai = Omit<chai, "secretIngredients">;