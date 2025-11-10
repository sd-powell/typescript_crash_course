// Basic Types -  number, string, boolean, any
let id: number = 5
let company: string = "Tech Corp"
let isPublished: boolean = true
let x: any = "Hello"

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, "Hello"]

// Tuple - fixed number of elements with different types
let person: [number, string, boolean] = [1, "John", true]

// Tuple Array - array of tuples
let employee: [number, string][] 

employee = [
  [1, "Alice"],
  [2, "Bob"],
  [3, "Charlie"]
]

// Union - multiple types
let pid: string | number
pid = "22"

// Enum - numeric
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

// Objects - defining structure
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: "John"
}

// Type Assertion - converting one type to another
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions - with types
function addNum(x: number, y: number): number {
  return x + y
}

// console.log(addNum(5, 10))

// Void
function log(message: string | number): void {
  console.log(message)
}

// Interfaces - Structuring Objects
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: "Jane"
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
    }

// Classes - Implementing Interfaces
class Person implements PersonInterface {
    // private id: number
    // protected id: number
    public id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "Brad")
const mike = new Person(2, "Mike")

// Subclasses - Inheritance
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "Sara", "Developer")

// Generics - create reusable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["Brad", "John", "Jill"])