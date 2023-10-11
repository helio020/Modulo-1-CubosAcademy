const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];

for (let index = 0; index < participantes.length; index++) {
    const element = participantes[index];
    if (element.nome === "Pedro") {
        console.log(`Galera... O ${element.nome} está na posição ${index + 1}, corre lá!`);
    }
}