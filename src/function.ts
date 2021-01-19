function add(x: number, y: number): number {
    return x + y;
}
const result = add(1, 2);


// optional한 파라미터 정의
function buildUserInfo(name?: string, email?: string) {
    return { name, email };
}
const user = buildUserInfo();

const add2 = (a:number, b: number): number => a + b;

interface Storage {
    a: string;
}

interface ColdStorage {
    b: string;
}
function store(type: 'Box'): Storage
function store(type: 'Ice'): ColdStorage

function store(type: 'Box' | 'Ice') {
    if(type === 'Box') {
        return { a: 'Box'}
    } else if (type === 'Ice') {
        return { b: 'Ice'}
    } else {
        throw new Error('unsupported type');
    }
}

const s = store('Ice');
s.b