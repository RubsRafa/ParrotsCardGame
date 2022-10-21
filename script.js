alert ("Bem-vindo ao jogo do piriquito que não é o Duolingo!");
const nome = prompt ("Qual é o seu nome");

let qtdCartas = prompt ("Com quantas cartas você deseja jogar? Números pares de 4 a 14.");
while (qtdCartas != 4 && qtdCartas != 6 && qtdCartas != 8 && qtdCartas != 10 && qtdCartas != 12 && qtdCartas != 14 ) {
    alert ("Quantidade de cartas inválidas!");
    qtdCartas = prompt ("Com quantas cartas você deseja jogar? Números pares de 4 a 14.");
}

qtdCartas = Number(qtdCartas);


const piriquitos = ['bobross', 'bobross', 'explody', 'explody', 'fiesta', 'fiesta', 'metal', 'metal', 'revertit', 'revertit', 'triplets', 'triplets', 'unicorn', 'unicorn']
const piriquitosProJogo = [];

for (let indice = 0; indice < qtdCartas; indice++) {
    piriquitosProJogo.push (piriquitos[indice]);
}


function misturar () {
    return Math.random () - 0.5; 
}

const piriquitosEmbaralhados = piriquitosProJogo.sort (misturar);


const addCartas = document.querySelector (".cartas");
for (let i = 0; i < qtdCartas; i++) {
    addCartas.innerHTML += `<li><div class="carta" onclick="virar(this);">
    <div class="verso"><img  class="piriquito" src="./Imagens/back.png" /></div>
    <div class="frente"><img class="piriquito" src="./Imagens/${piriquitosEmbaralhados[i]}parrot.gif" /></div>
    <h1>${piriquitosEmbaralhados[i]}</h1>
    </div></li>`;
}


let primeiraCarta;
let segundaCarta;
let nomePrimeiraCarta;
let nomeSegundaCarta; 


let contador = 0;
function virar(elemento){
    if (primeiraCarta == undefined) {
        elemento.classList.add ("virada");
        primeiraCarta = elemento;
        nomePrimeiraCarta = elemento.querySelector ("h1"); 
        contador++; 
    } else if (segundaCarta == undefined) {
        elemento.classList.add ("virada");
        segundaCarta = elemento; 
        nomeSegundaCarta = elemento.querySelector ("h1");
        contador++;  
    }
    compararCartas(); 


}
let contadorCartas = 0;
function compararCartas () {
    let compararCarta1 = nomePrimeiraCarta.innerHTML; 
    let compararCarta2 = nomeSegundaCarta.innerHTML; 
    if (compararCarta1 == compararCarta2) {
        primeiraCarta.classList.add ("acertou"); 
        segundaCarta.classList.add ("acertou");

        contadorCartas += 2;
        console.log (contadorCartas);

        primeiraCarta = undefined;
        segundaCarta = undefined;
        nomePrimeiraCarta = undefined;
        nomeSegundaCarta = undefined; 

        venceu(); 
    } else {
        setTimeout (() => {
        primeiraCarta.classList.remove ("virada"); 
        segundaCarta.classList.remove ("virada");

        primeiraCarta = undefined;
        segundaCarta = undefined;
        nomePrimeiraCarta = undefined;
        nomeSegundaCarta = undefined; 
        }, 500)
    }
}

function venceu () {
    if (contadorCartas === qtdCartas) {
        alert (`Parabéns, ${nome} mizerávi! Você arrasou no jogo do piriquito, com ${contador} jogadas.`); 
    }
}

setTimeout (contadorCartas, )