class Chai {

    public flavour: string = "Masala";

    private secret: string = "Green Tea";

    reveal() {
        return this.secret;
    };
};

class Shop {
    protected shopName = "Chai corner"

}

class Branch extends Shop {

    getName() {
        return this.shopName;
    }
}

class Wallet {
    #balance = 100;

    getBalance() {
        return this.#balance;
    }
}

const w = new Wallet();

class MordernChai {
    private Sugar = 2

    get sugar() {
        return this.Sugar;
    }
}

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string) {
    }

}
console.log(EkChai.shopName);


abstract class ChaiShop {
    abstract make(): void;
}

class ChaiCorner extends ChaiShop {
    make() {
        console.log("Making Chai");
    }
}

class Heater {
    heat() { }
}

class ChaiMaker {
    constructor(private heater: Heater) { }

    make() {
        this.heater.heat();
    }
}