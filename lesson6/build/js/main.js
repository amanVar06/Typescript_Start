"use strict";
// class Coder {
//   name: string; //it seems redundant but it is actually what we need to do
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }
//visibility modifiers or members/ data modoifiers/ access modifiers
// this will make our code a little more DRY
class Coder {
    constructor(name, //once the name is assigned it can not be changed
    music, age, lang = "Typescript" //making it optional by adding a default value here
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
console.log(Dave.music);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); //super come before we trying to assign anything else
        this.computer = computer;
        this.computer = computer; //we can't write this before calling super
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
// instanciate Guitarist
const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("strums"));
///////////////////////////////////////////
class Peeps {
    // static keyword applies directly to the class not to any specific object that you instanciated with the class
    // static members do not apply to any instanciation of the class, so we can't refer static member with this keyword
    // can be accessed only with class name, applied to class directly
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; //our first id will be 1
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log("Steve id:", Steve.id);
console.log("John id:", John.id);
console.log("Amy id:", Amy.id);
console.log(Peeps.count); //How many our class has been instanciated
////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    // get keyword just to get the data
    get data() {
        return this.dataState;
    }
    // setters can not return a value
    set data(value) {
        if (Array.isArray(value) && value.every((ele) => typeof ele === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Param is not an array of strings");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"]; //setter
console.log(MyBands.data); //getter
MyBands.data = [...MyBands.data, "ZZ Top"]; //setter
console.log(MyBands.data);
