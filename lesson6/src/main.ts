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
  //but what we will do when we want to add a property that need not to be instanciated right away
  secondLang!: string; //! just tells we are not going initialise it right away

  constructor(
    public readonly name: string, //once the name is assigned it can not be changed
    public music: string,
    private age: number,
    protected lang: string = "Typescript" //making it optional by adding a default value here
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
console.log(Dave.music);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age); //super come before we trying to assign anything else
    this.computer = computer; //we can't write this before calling super
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
// console.log(Sara.age)
// console.log(Sara.lang)
////////////////////////////////////////////

// implementing an interface to the class
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string; // recieve an action string and return a string as well
}

class Guitarist implements Musician {
  name: string; // do need to match up with interface
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

// instanciate Guitarist
const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("strums"));
///////////////////////////////////////////

class Peeps {
  static count: number = 0;
  // static keyword applies directly to the class not to any specific object that you instanciated with the class
  // static members do not apply to any instanciation of the class, so we can't refer static member with this keyword
  // can be accessed only with class name, applied to class directly

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; //our first id will be 1
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log("Steve id:", Steve.id);
console.log("John id:", John.id);
console.log("Amy id:", Amy.id);
console.log(Peeps.count); //How many our class has been instanciated
////////////////////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // get keyword just to get the data
  public get data(): string[] {
    return this.dataState;
  }

  // setters can not return a value
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((ele) => typeof ele === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Param is not an array of strings");
    }
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"]; //setter
console.log(MyBands.data); //getter

MyBands.data = [...MyBands.data, "ZZ Top"]; //setter
console.log(MyBands.data);
