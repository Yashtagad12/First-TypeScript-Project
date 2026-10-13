function makeChai(type: string, volume: number) {

    console.log(`I want a ${type} coffee of ${volume} ml in a cup.`)
}

makeChai("dalgona", 100);



function Chai(): number {
    return 30
}

Chai();

function orderChai(type: string = "Masala") {
    return type
}

console.log("Coffee Flavour:", orderChai);

function prepareChai(): void {
    console.log("Making chai is easy.")
}

prepareChai();

function createChai(object: {
    type: string,
    volume: number,
    isHot: boolean,

}): number {
    return 30
}

createChai({ type: "Masala", volume: 100, isHot: true });