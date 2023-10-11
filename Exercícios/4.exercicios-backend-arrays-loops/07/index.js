const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let array = []

for (let nome of nomes) {
    for (let letra of nome) {
        if (letra === "A" || letra === "a") {
            array.push(nome)
            break

        } else {
            break
        }
    }
}

console.log(array)