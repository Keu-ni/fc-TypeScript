class LocalDB<T> {
    constructor(private localStorageKey: string){}
    add(v: T) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface User { name: string }

const userDB = new LocalDB<User>('user');
userDB.add({ name: 'ahn' });
const userA = userDB.get();
userA.name;