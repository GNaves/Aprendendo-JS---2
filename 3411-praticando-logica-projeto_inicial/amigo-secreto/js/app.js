//Definir o nome do amigo
//Adicionar o nome do amigo em uma lista
//sortear os nomes da lista aleatoriamente
//reinicar o jogo

let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');

    if(amigo.value == ''){
        alert('Informe o nome do amigo');
        return;
    }

    if (amigos.includes(amigo.value)){
        alert('Nome ja adicionado');
        return;
    }
    let listaAmigo = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if(listaAmigo.textContent == ''){
        listaAmigo.textContent = amigo.value;
    }else{
        listaAmigo.textContent = listaAmigo.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function sortear(){
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    if (amigos.length < 4){
        alert('Adicione pelo menos 4 amigos');
        return;
    }
    for (let i = 0; i < amigos.length; i++) {
        if(i == amigos.length -1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '->' + amigos[0] + '<br/>';
        }else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '->' + amigos[i + 1] + '<br/>';
        }
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML ='';
    
}