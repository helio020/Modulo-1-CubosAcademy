const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let index = 0; index < filaDeDentro.length; index++) {
    if (filaDeDentro.length < 5) {
        let nomes = filaDeFora.shift()
        filaDeDentro.push(nomes)
    }
}

console.log(filaDeDentro)
console.log(filaDeFora)