//array and object
let names = ['mai', 'nam', 'hung']
names.push('son')
// names.push(3)  error

//array ben trong la mang gi thi khong the push kieu khac vao duoc

let mixed = [1, 'huy', false]
mixed.push(3) // ==> true
//mang hon hop thi co the push kieu gi vao cung duoc tru object
// mixedc.push({ a: '2', b: '3' }) ==> error

let person = {
    name: 'huy',
    age: 20,
    isStudent: true
}

// không thể gán kiểu khác cho object, cũng như không thể thêm thuộc tính khác cho object nếu ban đầu không có
// example

// person = {
//     name: 'huy',
//     age: 20,
//     isStudent: true,
//     haveAHouse: ['no']
// } ==> error