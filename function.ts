// function

const square = (side: number) => side * side

console.log(square(3))

let greet: Function

greet = () => console.log('hello')
greet()

const add = (a: number, b: number, c?: number | string) => {  // c?: number | string: khong bat buoc truyen tham so
    console.log(a + b)
    console.log(c)
}

add(1, 2, 'huy')

