"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Basic Types -  number, string, boolean, any
let id = 5;
let company = "Tech Corp";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple - fixed number of elements with different types
let person = [1, "John", true];
// Tuple Array - array of tuples
let employee;
employee = [
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"]
];
// Union - multiple types
let pid;
pid = "22";
// Enum - numeric
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John"
};
// Type Assertion - converting one type to another
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions - with types
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(5, 10))
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Jane"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes - Implementing Interfaces
class Person {
    // private id: number
    // protected id: number
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
// Subclasses - Inheritance
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Sara", "Developer");
// Generics - create reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Brad", "John", "Jill"]);
//# sourceMappingURL=index.js.map