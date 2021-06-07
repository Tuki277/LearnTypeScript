"use strict";
// class 
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    // public name: string
    // private age: number
    // readonly male: boolean
    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }
    function Employee(name, age, male) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.male = male;
        this.print = function () { return "Name: " + _this.name + ", age: " + _this.age + ", male: " + _this.male + " "; };
    }
    return Employee;
}());
exports.Employee = Employee;
var huy = new Employee('huy', 20, true);
console.log(huy.print());
