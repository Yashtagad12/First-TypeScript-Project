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

type DalgonaCoffee = {
    type: "Dalgona"
    sugar: number
};
type LatteCoffee = {
    type: "Latte"
    sugar: number
};
type CappuccinoCoffee = {
    type: "Cappuccino"
    sugar: number
};

type Coffee = DalgonaCoffee | LatteCoffee | CappuccinoCoffee;

function serveCoffeeType(coffee: Coffee) {
    switch (coffee.type) {
        case "Dalgona":
            return `Serving Dalgona coffee with ${coffee.sugar} sugar.`;
            break
        case "Latte":
            return `Serving Latte coffee with ${coffee.sugar} sugar.`;
            break;
        case "Cappuccino":
            return `Serving Cappuccino coffee with ${coffee.sugar} sugar.`;
            break;
        default:
            return "Serving default coffee.";
    }

}

const data: unknown = "chai aur code";
const strData: string = data as string;

type Role = "admin" | "user" | "guest";

function getRole(role: Role) {
    if (role === "admin") {
        return "You are an admin.";
    }
    if (role === "user") {
        return "You are a user.";
    }
    return "You are a guest.";

}

let value: any;

value = "Coffee";
value = 12;
value = 2.4;
value.toUpperCase(); // This will throw an error at runtime because value is a number now.

function ValueType(value: any) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return "Invalid input.";
    }

    return "Default value.";

}

ValueType("Coffee"); // Returns "COFFEE"

type Books = ['Harry Potter', 'Lord of the Rings', '1984'];
type Pen = ['Parker', 'Reynolds', 'Cello'];
type Pencil = ['Nataraj', 'Apsara', 'Camlin'];

function StationaryItems(item: Books | Pen | Pencil) {
    if (item[0] === 'Harry Potter') {
        return `You selected a book: ${item[0]}`;
    }
}
