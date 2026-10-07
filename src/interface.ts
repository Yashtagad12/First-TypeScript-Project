type Coffeeorder = {
    type: "Chai"
    sugar: number
    strong: boolean
}

function makeCoffee(order: Coffeeorder) {

    console.log(order);
}

function serveCoffee(order: Coffeeorder) {
    console.log(order);
}

type coffeeRecipe = {
    milk: number;
    sugar: number;
    strong: boolean;
}

class IrishCoffee implements coffeeRecipe {
    milk = 20;
    sugar = 10;
    strong = true;

}

type Config = {
    readonly appName: string;
    version: number;
}

const cfg: Config = {
    appName: "Masterji"
    version: 1
}

// cfg.appName = 'CoffeeCode'