// type alias

type StringOrNumber = string | number
type Student = { 
    name: string
    id: StringOrNumber
}

const studentDetails = (id: StringOrNumber, studentName: string) => {
    console.log(`Student ${studentName} has id: ${id}`)
}

studentDetails(123, 'huy')

const greet = (user: Student) => console.log(`Student name ${user.name} and id ${user.id}`)

greet({ name: 'huy', id: 123})