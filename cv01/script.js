// Adiciona um ouvinte de evento a cada opção
document.querySelectorAll('div[id^="opcao"]').forEach(opcao => {
    opcao.addEventListener('click', (event) => {
        event.preventDefault();

        // Obtém o ID do contêiner associado à opção clicada
        const containerId = opcao.querySelector('a').getAttribute('href').substring(1);

        // Obtém todos os contêineres
        const containers = document.querySelectorAll('.opcoes-container');

        // Oculta todos os contêineres
        containers.forEach(container => {
            container.style.display = 'none';
        });

        // Exibe o contêiner correspondente
        const container = document.getElementById(containerId);
        container.style.display = 'block';
    });
});