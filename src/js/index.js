const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

botaoMostrarProjetos.addEventListener('click', () => {
    const projetosOcultos = document.querySelectorAll('.projeto:not(.ativo)');
    
    if (projetosOcultos.length > 0) {
        projetosOcultos.forEach(projeto => {
            projeto.classList.add('ativo');
        });

        botaoMostrarProjetos.textContent = 'Mostrar menos';
    } else {
        const projetosExtras = document.querySelectorAll('.projeto.ativo:not(:nth-child(-n+4))');
        projetosExtras.forEach(projeto => {
            projeto.classList.remove('ativo');
        });

        botaoMostrarProjetos.textContent = 'Mostrar mais';
    }
});
