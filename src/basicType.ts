let numberValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;

numberValue = 3.3;
stringValue = 'hello';
stringValue = `
    hello
    ${1 + 1}
`;

booleanValue = true;
undefinedValue = undefined;
nullValue = null;

numberValue: undefined;
stringValue: null;

anyValue = {};

objValue = function() {

}
objValue = {};
objValue = new String('hello');

symbolValue = Symbol();

let nameList: string[];
nameList = ['a', 'b', 'c'];
nameList.push();


let user1: { name: string, score: number };
user1 = { 
    name: 'jay',
    score: 32,
};


let tuple2: [number, string];
tuple2 = [3, '3'];
