var isDone = true;
console.log("boolean variable: isDone :" + isDone);
var decimal = 6;
var hex = 0x00ff;
var binary = 3;
var octal = 9;
console.log("number decimal: " + decimal);
console.log("number hex    : " + hex);
console.log("number binary : " + binary);
console.log("number octal  : " + octal);
var namestr = "bob";
console.log(namestr);
namestr = "smith";
console.log(namestr);
namestr = "Gene";
var age = 37;
var sentence = "Hello, my name is " + namestr + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
var sentence1 = "Hello, my name is " + namestr + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
console.log(sentence1);
var list = [1, 2, 3];
console.log("Array info list: " + list);
var list2 = [2, 3, 4];
console.log("Array info list: " + list);
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
console.log("Tuple: x: " + x);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var colorName = Color[2];
console.log("enum Color : " + Color);
console.log("enum Color c: " + c);
console.log("enum Color colarName: " + colorName);
var notSure = 4;
notSure = "maybe a string instead";
console.log("Any type: notSure: " + notSure);
notSure = false; // okay, definitely a boolean
console.log("Any type: notSure: " + notSure);
var list3 = [1, true, "free"];
list3[1] = 100;
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
var unusable = undefined;
var u = undefined;
var n = null;
//# sourceMappingURL=test.js.map