// generics <string>

type myArr = Array<string>
type numArr = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1] // chi truyen duoc number

const l1 = last([1 ,2 , 3])

console.log({ l1 })

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1] // truyen kieu du lieu gi vao cung duoc

const l2 = lastT(['a', 'b'])

console.log({ l2 })

const makeArr = (x: number) => [x]

const m = makeArr(5)

console.log({ m  })

const makeArrT = <T>(x: T) => [x]

const m1 = makeArrT('a')

console.log({ m1 })

const makeArrXY = <x, y>(x: x, y: y) => [x, y]

const m2 = makeArrXY(5, 'a')

console.log({ m2 })

const makeTuple = <x, y>(x: x, y: y): [x, y] => [x, y]

const m3 = makeTuple('x', 5)

console.log({ m3 })

const m4 = makeTuple<null, number>(null, 3)

console.log({ m4 })