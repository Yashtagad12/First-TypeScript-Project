function getCoffee(kind: string | number) {

    if (typeof kind === "string") {
        return `You ordered a ${kind} coffee.`;
    }
    return `Coffe Order: ${kind}`;
}

function serveCoffee(msg?: string) {
    if (msg) {
        return `${msg} Enjoy your coffee!`;
    }

    return "Serving default coffee."
}

function orderCoffee(size: "small" | "medium" | "large" | number) {

    if (size === "small") {
        return "You ordered a small coffee.";
    }
    if (size === "medium" || size === "large") {
        return `Make extra Coffee.`;
    }

    return `Coffe Order: #${size}`;

}

class Half {
    serve() {
        return `Serving half coffee.`;
    }
}

class Full {
    serve() {

        return `Serving full coffee.`;
    }
}

function serve(coffee: Half | Full) {
    if (coffee instanceof Half) {
        return coffee.serve();
    }
}

type CoffeeOrder = {
    type: string
    sugar: number
}

function coffeeOrder(obj: any): obj is CoffeeOrder {
    return (
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveCoffeeOrder(order: CoffeeOrder | string) {
    if (coffeeOrder(order)) {
        return `Serving ${order.type} coffee with ${order.sugar} sugar.`;
    }
    return `Serving default coffee. ${order}`;

}