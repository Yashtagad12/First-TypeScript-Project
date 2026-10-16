interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;
}

const MasalaChai: Chai = {
    flavour: "Masala",
    price: 20,
    milk: true
}

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = { id: 1, name: "Chaicode caffee" }

interface TeaMachine {
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {

    start() {
        console.log("Starting the machine");
    },
    stop() {
        console.log("Stopping the machine");
    }
}

interface ChaiRatings {
    [flavour: string]: number;
}

const ratings: ChaiRatings = {
    Masala: 4.5,
    Green: 4.0,
    Black: 3.5
}

interface User {
    name: string;
}

interface User {
    age: number;
}

const userDetails: User = {
    name: "John Doe",
    age: 30
}

interface A {
    a: string;
}

interface B {
    b: number;
}

interface C extends A, B { }    