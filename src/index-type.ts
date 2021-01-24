interface Props {
    [key: string]: string;
}

let keys: keyof Props;

interface User {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = 'age';

let helloMethod: User['hello'];
helloMethod = function(msg: string) {
    
}


const str: Props = {
    a: 'd',
    b: 'e',
    c: '3',
    0: 'd',
    1: 'g'
}
