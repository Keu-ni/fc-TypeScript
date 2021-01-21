interface DB<T> {
    add(v: T): void;
    get(): T;
}

class D<T> implements DB<T> {
    add(v: T): void {
        throw new Error("Method not implemented.");
    }
    get(): T {
        throw new Error("Method not implemented.");
    }
}

interface JSONSerialize {
    serialize(): string;
}

class LocalDB<T extends JSONSerialize> {
    constructor(private localStorageKey: string){}
    add(v: T) {
        localStorage.setItem(this.localStorageKey, v.serialize());
    }
    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface Vegetable {
    v: string;
}

interface Meat {
    m: string;
}

interface Cart2<T> {
    getItem(): T extends Vegetable ? Vegetable :  Meat
}

const cart1: Cart2<Vegetable> = {
    getItem() {
        return {
            v: ''
        }
    }
}

cart1.getItem()