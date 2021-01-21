interface User {
    name: string;
}

interface Product {
    id: string;
    price: number;
}

class Cart {
    constructor(public user: User, private store: object = {}) {
        this.user = user;
        this.store = {};
    }
    public put(id: string, product: Product) {
        // this.store[id] = product;
    }
    private get(id: string) {
        // return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user
    }
}