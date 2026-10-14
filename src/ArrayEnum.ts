const chaiFlavours: string[] = ["Masala", "Ginger"]
const chaiPrice: number[] = [20, 25]

const rating: Array<number> = [4.5, 4.7]

type Chai = {
    name: string,
    price: number,
}

const menu: Chai[] = [
    { name: "Masala Chai", price: 15 },
    { name: "Ginger Chai", price: 25 },
]

const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"];

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
]

let chaiTuple: [string, number];

chaiTuple = ["Masala", 20]

let userInfo: [string, number, boolean];

userInfo = ["John", 30, true]
userInfo = ["Jane", 25, false]

const location: readonly [number, number] = [12.97, 77.59];

const items: [name: string, price: number] = [
    "Masala Chai", 20
]

enum Cupsize {
    SMALL,
    MEDIUM,
    LARGE,
}

const size = Cupsize.MEDIUM;

enum Chaitype {
    MASALA = "Masala",
    GINGER = "Ginger",
    CARDAMOM = "Cardamom",
}

function makeChai(type: Chaitype) {
    console.log(`Making ${type} Chai`);
}

makeChai(Chaitype.MASALA);
makeChai(Chaitype.GINGER);
makeChai(Chaitype.CARDAMOM);

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
}

let s = Sugars.MEDIUM;