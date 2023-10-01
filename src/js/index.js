// recuperar lista de botões para selecionar
const botoes = document.querySelectorAll('.botao');

// Adicionar classe 'selecionado' ao botão escolhido.
// Percorre a lista de botões e adiciona em todos a função de evento de 'click'
// Pegar os personagens do javascript e mostrar as informações deles.
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) =>{
    botao.addEventListener("click",()=>{
        // Verificar se existe um botão selecionado.
        desselecionar();
        DesselecionarPersonagem();

        botao.classList.add('selecionado');
        
        personagens[indice].classList.add("selecionado")

    })
    
})


// Remover classe selecionado do personagem.
function DesselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove('selecionado');

}

// Função para desselecionar o ícones dos personagens
function desselecionar() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove('selecionado');

}

