/*  
    OBJETIVO - quando clicar no botão temos que mostrar a imagem de fundo correspondente.

    Passo 1 - dar um jeito  de pegar o elemento HTML dos botões

    Passo 2 - dar um jeito de identificar o clic do usuário no botão

    Passo 3 -  desmarcar o botão selecionado anterior 

    Passo 4 - marcar o botão clicado como se estivesse selecionada

    Passo 5 - esconder a imagem anterior

    Passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//     Passo 1 - dar um jeito  de pegar o elemento HTML dos botões

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll('.imagem')

//      Passo 2 - dar um jeito de identificar o clic do usuário no botão

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    //     Passo 3 -  desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    //     Passo 4 - marcar o botão clicado como se estivesse selecionada
    selecionarBotaoCarrossel(botao);

    //     Passo 5 - esconder a imagem ativa anterior
    esconderImagemAtiva();

    //     Passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    mostrarImagemAtiva(indice);
  });
});

function mostrarImagemAtiva(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

