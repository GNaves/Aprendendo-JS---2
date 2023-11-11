
let valorTotal
limpar();

function adicionar(){
    //recuperar valores nome, quantidade, e valor
    //getElementById  -> devolve a tag html para a variavel. para pegar o valor que contem dentro do id .value
    let produto = document.getElementById('produto').value;
    //split -> funçao de uma string no JS que voce passa um caracter que vc quer que seja exatamente a onde é o dividida a frase no meio, ele retorna um array e o tamanho depende de quantas vezes aparece o caracter.
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço
    let preco = quantidade * valorUnitario;
    //adicionar produto no carrinho 
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML +`<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
    </section>`
    //atualizar o valor total
    valorTotal = valorTotal + preco
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = ` R$${valorTotal}`
    document.getElementById('quantidade').value = 0;
    
}

function limpar(){
    valorTotal = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
