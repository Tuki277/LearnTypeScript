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

const m4 = makeTuple<string | null, number>(null, 3)

console.log({ m4 })

// generics extends

// const makeFullName = obj => ({
//     ...obj,
//     fullName: `${obj.firstName} ${obj.fullName}`
// })

const makeFullNameConstraint = (obj: {
    firstName: string
    lastName: string
}) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint({
    firstName: 'huy',
    lastName: 'dev'
})

console.log({ n1 })

const makeFullConstraintWithGenerics = <T extends {firstName: string, lastName: string}>(
    obj: T
) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n2 = makeFullConstraintWithGenerics({ 
    firstName : 'huy',
    lastName: 'dev',
    age: 20
})

console.log({ n2 })

const addNewEmployee = (employee: object) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const n3 = addNewEmployee({ name: 'huy', age: 20})

console.log({ n3 })

const addNewEmployeeT = <T extends object>(employee: T) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const n4 = addNewEmployeeT({ name: 'name', age: 20, male: true})

console.log({ n4 })
console.log(n4.name)

//generics in interface

interface Resource<T> {
    uid: number,
    name: string,
    data: T
}

type NumberResource = Resource<number[]>

const numbers: NumberResource = {
    uid: 2,
    name: 'number',
    data: [2, 1, 3]
}

const resourceOne: Resource<string> = {
    uid: 1,
    name: 'huy',
    data: 'hello'
}

const resourceTwo: Resource<object> = {
    uid: 1,
    name: 'huy1',
    data: {
        name: 'huy2',
        age: 20
    }
}

console.log({ resourceTwo })

const resourceThree: Resource<string[]> = {
    uid: 1,
    name: 'huy1',
    data: ['html', 'css']
}