const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
};

const listaDeAulas = [{
    identificador: 1,
    nome_da_aula: "Introdução a programação"
},
{
    identificador: 2,
    nome_da_aula: "Variáveis"
},
{
    identificador: 3,
    nome_da_aula: "Condicionais"
},
{
    identificador: 4,
    nome_da_aula: "Arrays"
}];

for (let listaDeAula of listaDeAulas) {
    curso.aulas.push(listaDeAula);
}

console.log(curso)