let qtdCartas = prompt ("Com quantas cartas você deseja jogar? Números pares de 4 a 14.");
while (qtdCartas != 4 && qtdCartas != 6 && qtdCartas != 8 && qtdCartas != 10 && qtdCartas != 12 && qtdCartas != 14 ) {
    alert ("Quantidade de cartas inválidas!");
    qtdCartas = prompt ("Com quantas cartas você deseja jogar? Números pares de 4 a 14.");
}

let contador = 0;
qtdCartas = Number (qtdCartas);

const addCartas = document.querySelector (".cartas");
while (contador < qtdCartas) {
    addCartas.innerHTML += `<div class="carta" onclick="virar(this);">
    <div class="frente face"><img  class="piriquito" src="./Imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" /></div>
    <div class="verso face escondido"><img class="piriquito" src="./Imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif" /></div>
</div>`;
    contador++; 
}  
function virar (cartaSelecionada) {
//    const virarVerso = document.querySelector (".verso");
//    virarVerso.classList.toggle ("escondido");
//    const virarFrente = document.querySelector (".frente");
//    virarFrente.classList.toggle ("escondido");
    cartaSelecionada.classList.toggle ("face");
    const virarVerso = cartaSelecionada.querySelector (".verso");
    virarVerso.classList.toggle ("escondido");
    const virarFrente = cartaSelecionada.querySelector (".frente");
    virarFrente.classList.toggle ("escondido");
}