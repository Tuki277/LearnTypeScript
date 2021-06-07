// function signature

// let greet: Function

// greet = () => console.log('hello world')

let greet: (a: string, b: string) => void

greet = (name: string, greeting: string) => console.log(`${name} says ${greeting}`)

greet('huy', 'hello')

let calculate: (a: number, b: number, c: string) => number
calculate = (numberOne: number, numberTwo: number, action: string) => 
action === 'add' ? numberOne + numberTwo : numberOne - numberTwo
console.log(calculate(1, 2, 'add'))