export {};
let message = "Welcome back";
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "Codevolution";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "username";

let sentence: string = `My name is ${name} I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuples maintain order of arguments
let person1: [string, number] = ["Chris", 22];

// enum
enum Color {
  Red = 5,
  Green,
  Blue,
}

let c: Color = Color.Green;
// console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "name";

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) {
  //   console.log(myVariable.name);
}

// type assertion (casting)
//(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;

let anyType: any;
anyType = 20;
anyType = true;
anyType.name;

// functions
function add(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}

add(5, 10);
add(5);

// optional properties can be used with interfaces
// such as form data (not all form fields are required)
interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Bruce",
  lastName: "Wayne",
};

fullName(p);

class Employee {
  protected employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Chris");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log(`${this.employeeName} delegating tasks`);
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1);
console.log(m1.employeeName);
