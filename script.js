//let qtdCartas = prompt ("Com quantas cartas você deseja jogar? Números pares de 4 a 14.");
//while (qtdCartas != 4 && qtdCartas != 6 && qtdCartas != 8 && qtdCartas != 10 && qtdCartas != 12 && qtdCartas != 14 ) {
//    alert ("Quantidade de cartas inválidas!");
//    qtdCartas = prompt ("Com quantas cartas você deseja jogar? Números pares de 4 a 14.");
//}


const piriquitos = [`bobross`, `explody`, `fiesta`, `metal`, `revertit`, `triplets`, `unicorn`]

const piriquitosDuplicados = [ ... piriquitos, ... piriquitos];
let piriquitosEmbaralhados = piriquitosDuplicados.sort (embaralhar); 

function embaralhar () {
    Math.random() - 0.5; 
}




qtdCartas = Number (qtdCartas);
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

function virar(elemento){
    if (primeiraCarta == undefined) {
        elemento.classList.add ("virada");
        primeiraCarta = elemento;
        nomePrimeiraCarta = elemento.querySelector ("h1"); 
    } else if (segundaCarta == undefined) {
        elemento.classList.add ("virada");
        segundaCarta = elemento; 
        nomeSegundaCarta = elemento.querySelector ("h1"); 
    }
    compararCartas(); 


}

function compararCartas () {
    if (nomePrimeiraCarta.innerHTML == nomeSegundaCarta.innerHTML) {
        
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
        }, 800)
    }
}

function venceu () {
    let cartasViradas = document.querySelectorAll (".carta");
    if (cartasViradas.classList.contains("virada")) {
        prompt ("Parabéns! Você venceu!")
    }
}