const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const pet = "Max";

function encontrarDonoDoPet(usuarios, pet) {
    let encontrado = false;
    for (const usuario of usuarios) {
        if (usuario.pets.includes(pet)) {
            console.log(`O(A) dono(a) do(a) ${pet} é o(a) ${usuario.nome}`);
            encontrado = true;
        }
    }
    if (encontrado === false) {
        console.log(`Que pena ${pet}, não encontramos seu(sua) dono(a)`);
    }
}
encontrarDonoDoPet(usuarios, pet);