const sistemaAprendizado = {
    usuarios: [],
    fatores: [],
    intencoes: [],
    emociones: [],
    possibilidades: [],
    modulos: [
        {
            nome: "Gestão de Projetos",
            topicos: [
                {
                    titulo: "Introdução à Gestão de Projetos",
                    atividades: [
                        { descricao: "Ler sobre PMBOK", status: "Pendente" },
                        { descricao: "Participar de um workshop", status: "Completo" }
                    ]
                }
            ]
        }
    ]
};

// Adiciona um usuário
document.getElementById('addUserButton').onclick = function() {
    const nome = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    if (nome && email) {
        sistemaAprendizado.usuarios.push({ nome, email, progresso: [] });
        document.getElementById('output').innerText = `Usuário "${nome}" adicionado.`;
    } else {
        alert("Por favor, preencha todos os campos.");
    }
};

// Adiciona um fator
document.getElementById('addFactorButton').onclick = function() {
    const fator = document.getElementById('factorName').value;
    if (fator) {
        sistemaAprendizado.fatores.push(fator);
        document.getElementById('output').innerText = `Fator "${fator}" adicionado.`;
    } else {
        alert("Por favor, preencha o campo do fator.");
    }
};

// Adiciona uma intenção
document.getElementById('addIntentionButton').onclick = function() {
    const intencao = document.getElementById('intentionName').value;
    if (intencao) {
        sistemaAprendizado.intencoes.push(intencao);
        document.getElementById('output').innerText = `Intenção "${intencao}" adicionada.`;
    } else {
        alert("Por favor, preencha o campo da intenção.");
    }
};

// Adiciona uma emoção
document.getElementById('addEmotionButton').onclick = function() {
    const emocao = document.getElementById('emotionName').value;
    if (emocao) {
        sistemaAprendizado.emociones.push(emocao);
        document.getElementById('output').innerText = `Emoção "${emocao}" adicionada.`;
    } else {
        alert("Por favor, preencha o campo da emoção.");
    }
};

// Adiciona uma possibilidade
document.getElementById('addPossibilityButton').onclick = function() {
    const possibilidade = document.getElementById('possibilityName').value;
    if (possibilidade) {
        sistemaAprendizado.possibilidades.push(possibilidade);
        document.getElementById('output').innerText = `Possibilidade "${possibilidade}" adicionada.`;
    } else {
        alert("Por favor, preencha o campo da possibilidade.");
    }
};

// Atualiza o status da atividade
document.getElementById('updateActivityButton').onclick = function() {
    const usuarioNome = document.getElementById('activityUser').value;
    const moduloNome = document.getElementById('activityModule').value;
    const topicoTitulo = document.getElementById('activityTopic').value;
    const atividadeDescricao = document.getElementById('activityDescription').value;
    const novoStatus = document.getElementById('activityStatus').value;

    const usuario = sistemaAprendizado.usuarios.find(u => u.nome === usuarioNome);
    const modulo = sistemaAprendizado.modulos.find(m => m.nome === moduloNome);
    const topico = modulo.topicos.find(t => t.titulo === topicoTitulo);
    const atividade = topico.atividades.find(a => a.descricao === atividadeDescricao);

    if (usuario && modulo && topico && atividade) {
        atividade.status = novoStatus;
        usuario.progresso.push({ atividade: atividadeDescricao, status: novoStatus });
        document.getElementById('output').innerText = `Status de "${atividadeDescricao}" atualizado para "${novoStatus}" por "${usuarioNome}".`;
    } else {
        alert("Verifique os dados fornecidos.");
    }
};

// Visualiza o progresso do usuário
document.getElementById('viewProgressButton').onclick = function() {
    const usuarioNome = document.getElementById('progressUser').value;
    const usuario = sistemaAprendizado.usuarios.find(u => u.nome === usuarioNome);
    if (usuario) {
        document.getElementById('output').innerText = `${usuarioNome}: ${JSON.stringify(usuario.progresso)}`;
    } else {
        alert("Usuário não encontrado.");
    }
};

