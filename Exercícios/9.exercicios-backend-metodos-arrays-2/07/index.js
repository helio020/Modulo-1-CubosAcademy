const endereços = [
    { cep: 0o111222, rua: "Rua dos Artistas" },
    { cep: 0o111333, rua: "Rua Augusta" },
    { cep: 0o222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const localizarEndereço = (cepInformado, arrayEndereços) => {
    const resultado = arrayEndereços.find((endereço) => {
        return endereço.cep === cepInformado;
    });

    console.log(resultado.rua);
}

localizarEndereço(0o222444, endereços);