function mostrarComando(comado) {
    var comandoSelecionado = document.getElementById('comandoSelecionado');

    switch (comado) {
        case 'comandoInit':
            comandoNome.innerHTML = "Git Init";
            comandoSelecionado.innerHTML = "É utilizado para inicializar um repositório Git dentro de um diretório do sistema. Após sua utilização, a ferramenta passa a monitorar o estado dos arquivos no projeto.";
            break;
        case 'comandoClone':
            comandoNome.innerHTML = "Git Clone";
            comandoSelecionado.innerHTML = "É utilizado para criar uma cópia de um repositório remoto em um diretório da máquina.";
            break;
        case 'comandoCommit':
            comandoNome.innerHTML = "Git Commit";
            comandoSelecionado.innerHTML = "É utilizado para criar uma nova versão do projeto a partir de um pacote de alterações.";
            break;
        case 'comandoBranch':
            comandoNome.innerHTML = "Git Branch";
            comandoSelecionado.innerHTML = "É utilizado para criar novos ramos de desenvolvimento, bem como visualizar quais são os ramos existentes.";
            break;
        case 'comandoCheckout':
            comandoNome.innerHTML = "Git Checkout";
            comandoSelecionado.innerHTML = "É utilizado para navegar entre as versões do projeto, bem como entre as diferentes ramificações criadas.";
            break;
        default:
            comandoNome.innerHTML = "";
            comandoSelecionado.innerHTML = "";
    }
}

var comandos = document.querySelectorAll('#listaComandos li');
comandos.forEach(function(comando) {
    comando.addEventListener('click', function() {
        mostrarComando(comando.id);
    });
});