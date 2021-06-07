// generics <string>
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
