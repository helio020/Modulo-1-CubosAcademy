const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const filtrarPessoasProgramadoras = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Programador" && pessoa.idade > 20;
});
console.log(filtrarPessoasProgramadoras);

const filtrarPessoasJornalistas = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Jornalista" && pessoa.idade > 30;
});
console.log(filtrarPessoasJornalistas);

const filtrarPessoasJovens = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Jornalista" && pessoa.idade <= 29 || pessoa.profissao === "Programador" && pessoa.idade <= 29;
});
console.log(filtrarPessoasJovens);