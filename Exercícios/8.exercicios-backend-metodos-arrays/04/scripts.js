const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function filaDeAtendimento(pacientes, operacao, nomeDoPaciente) {
    pacientes.push(nomeDoPaciente);
    let listaAtualizada = [];
    for (const paciente of pacientes) {
        if (operacao === 'agendar') {
            listaAtualizada.splice(listaAtualizada.length, 0, paciente);
        } else if (operacao === 'atender') {
            pacientes.splice(0, pacientes.length);
        }
    }
    console.log(listaAtualizada.join(', '));
    if (operacao === 'atender') {
        console.log(pacientes);
    }
}
filaDeAtendimento(pacientes, 'agendar', 'Hélio');
