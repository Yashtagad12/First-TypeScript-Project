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