function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    //.dashboard__item__img -> o . serve para buscar a class no HTML
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    //classList -> busca todas as classes que o elemento possui/ contains busca a tag especifica no elemento.
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        //textContent -> modifica apenas o texto e nao o texto e a tag.
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
