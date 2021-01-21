interface Person {
    name: string;
    say(message: string): void;
}

interface Programmer {
    writeCode(requirement: string): string;
}

abstract class Korean implements Person {
    public abstract memberNo: number;

    constructor(public name: string) {  
    }

    say(message: string): void {
        console.log(message);
    }

    abstract loveKimchi(): void;

}

class KoreanProgrammer extends Korean implements Programmer {
    constructor(public name: string, public memberNo: number) {
        super(name);
    }

    say(message: string): void {
        console.log(message)
    }

    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '......do something'
    }

    loveKimchi() {
        console.log('djwodjoa');
    }
}

const jay = new KoreanProgrammer('jay', 222324);