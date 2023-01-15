//Variabile
//CamelCase textContent


let x = 'abb'
x = 'wn'
console.log(x);

//Undefined
let y;
console.log(y)

//null - variabila goala
let z = null
console.log(z)

//bool -> True/False
let bool = false
console.log(bool)

//liste
let array = [1, 2, 'agg', true]
console.log(array)

//obiecte
const car = { type: 'Dacia', model: 1300, color: 'white' }
console.log(car.type)

//lipire text
console.log('aggt' + 19 + 'wjdkwnefefnjwfnnejn')

//operatii
console.log(18 % 7)
let a = 10
console.log(++a)
console.log(--a)

//if
if(1+1==2)
{
    console.log("true")
}
else{
    console.log('false')
}

console.log(document.getElementById("title"))
document.getElementById("title").textContent ='Changed'

// Operatori
// console.log(50 % 4)

// Operatori logici
// Egalitatea
// console.log(1 == 2)

// Inegalitate
// console.log(1 != 2)

// AND (&&)
// console.log(1 > 0 && 10 > 5)

// OR (||)
// console.log(1 == 1 || 1 > 2)

// Functii
function add(a, b) {
    console.log(a + b)
}

// add(3848, 4985)

let nume = ['Andrei', 'Stefan', "Gigel"]
// console.log(nume)

for (let i = 0; i < nume.length; i++) {
    console.log(nume[i])
}