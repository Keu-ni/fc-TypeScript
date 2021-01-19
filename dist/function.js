function add(x, y) {
    return x + y;
}
const result = add(1, 2);
function buildUserInfo(name, email) {
    return { name, email };
}
const user = buildUserInfo();
const add2 = (a, b) => a + b;
function store(type) {
    if (type === 'Box') {
        return { a: 'Box' };
    }
    else if (type === 'Ice') {
        return { b: 'Ice' };
    }
    else {
        throw new Error('unsupported type');
    }
}
const s = store('Ice');
s.b;
//# sourceMappingURL=function.js.map