let isDone: boolean =true;

console.log("boolean variable: isDone :"+isDone);

let decimal: number = 6;
let hex: number = 0x00ff;
let binary: number = 0b0011;
let octal: number = 0o011;
console.log("number decimal: "+decimal);
console.log("number hex    : "+hex);
console.log("number binary : "+binary);
console.log("number octal  : "+octal);

let namestr: string = "bob";
console.log(namestr);
namestr = "smith";
console.log(namestr);
namestr = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ namestr }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);
let sentence1: string = "Hello, my name is " + namestr + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
console.log(sentence1);

let list: number[] = [1, 2, 3];
console.log("Array info list: " + list);
let list2: Array<number> = [2,3,4];
console.log("Array info list: " + list);

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
console.log("Tuple: x: " + x);

enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log("enum Color : " + Color);
console.log("enum Color c: " + c);
console.log("enum Color colarName: " + colorName);

let notSure: any = 4;
notSure = "maybe a string instead";
console.log("Any type: notSure: " + notSure);
notSure = false; // okay, definitely a boolean
console.log("Any type: notSure: " + notSure);

let list3: any[] = [1, true, "free"]; 
list3[1]=100;

function warnUser(): void{
  console.log("This is my warning message");
}

warnUser();

let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;
