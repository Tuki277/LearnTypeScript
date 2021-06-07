// class 

export class Employee {
    // public name: string
    // private age: number
    // readonly male: boolean

    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }

    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ) {}

    print = () => `Name: ${this.name}, age: ${this.age}, male: ${this.male} `

}

const huy = new Employee('huy', 20, true)
console.log(huy.print())