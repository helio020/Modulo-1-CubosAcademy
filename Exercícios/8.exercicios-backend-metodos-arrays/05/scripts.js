const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(pacientes, paciente) {
    pacientes.splice(pacientes.length, 0, paciente);
    console.log(pacientes.join(', '));
}
agendarPaciente(pacientes, 'Hélio')

function cancelarAtendimento(pacientes, pacienteParaCancelar) {
    if (pacientes.includes(pacienteParaCancelar)) {
        const posicao = pacientes.indexOf(pacienteParaCancelar)
        pacientes.splice(posicao, 1);
    }
    console.log(pacientes.join(', '));
}
cancelarAtendimento(pacientes, 'José');

function atenderPaciente(pacientes) {
    for (let i = 0; i < pacientes.length; i++) {
        pacientes.splice(0, 1);
        console.log(pacientes.join(', '));
    }
}
atenderPaciente(pacientes);
