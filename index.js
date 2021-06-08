// generics <string>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; }; // chi truyen duoc number
var l1 = last([1, 2, 3]);
console.log({ l1: l1 });
var lastT = function (arr) { return arr[arr.length - 1]; }; // truyen kieu du lieu gi vao cung duoc
var l2 = lastT(['a', 'b']);
console.log({ l2: l2 });
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
console.log({ m: m });
var makeArrT = function (x) { return [x]; };
var m1 = makeArrT('a');
console.log({ m1: m1 });
var makeArrXY = function (x, y) { return [x, y]; };
var m2 = makeArrXY(5, 'a');
console.log({ m2: m2 });
var makeTuple = function (x, y) { return [x, y]; };
var m3 = makeTuple('x', 5);
console.log({ m3: m3 });
var m4 = makeTuple(null, 3);
console.log({ m4: m4 });
// generics extends
// const makeFullName = obj => ({
//     ...obj,
//     fullName: `${obj.firstName} ${obj.fullName}`
// })
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n1 = makeFullNameConstraint({
    firstName: 'huy',
    lastName: 'dev'
});
console.log({ n1: n1 });
var makeFullConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n2 = makeFullConstraintWithGenerics({
    firstName: 'huy',
    lastName: 'dev',
    age: 20
});
console.log({ n2: n2 });
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var n3 = addNewEmployee({ name: 'huy', age: 20 });
console.log({ n3: n3 });
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var n4 = addNewEmployeeT({ name: 'name', age: 20, male: true });
console.log({ n4: n4 });
console.log(n4.name);
var numbers = {
    uid: 2,
    name: 'number',
    data: [2, 1, 3]
};
var resourceOne = {
    uid: 1,
    name: 'huy',
    data: 'hello'
};
var resourceTwo = {
    uid: 1,
    name: 'huy1',
    data: {
        name: 'huy2',
        age: 20
    }
};
console.log({ resourceTwo: resourceTwo });
var resourceThree = {
    uid: 1,
    name: 'huy1',
    data: ['html', 'css']
};
