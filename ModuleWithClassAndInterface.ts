import { Invoice, Payment } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice('vinamilk', 'drink milk', 5000000)
const documnetTwo: hasPrint = new Payment('Vietnam Airlines', 'fly', 2500000000)

const allDocument: hasPrint[] = []
allDocument.push(documentOne, documnetTwo)

console.log(allDocument)