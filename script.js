let numero = Number(prompt("Digite um numero par, maior ou igual a 4 e menor ou igual a 14"));

while(numero < 4 || numero > 14 || numero %2 !==0){
    numero = Number(prompt("Digite um numero par, maior ou igual a 4 e menor ou igual a 14"));
}

let lista = document.querySelector("ul");

let cartas = ["/Projeto_04_parrotsCardGame/images/bobrossparrot.gif",
"/Projeto_04_parrotsCardGame/images/bobrossparrot.gif",
"/Projeto_04_parrotsCardGame/images/explodyparrot.gif",
"/Projeto_04_parrotsCardGame/images/explodyparrot.gif",
"/Projeto_04_parrotsCardGame/images/fiestaparrot.gif",
"/Projeto_04_parrotsCardGame/images/fiestaparrot.gif",
"/Projeto_04_parrotsCardGame/images/metalparrot.gif",
"/Projeto_04_parrotsCardGame/images/metalparrot.gif",
"/Projeto_04_parrotsCardGame/images/revertitparrot.gif",
"/Projeto_04_parrotsCardGame/images/revertitparrot.gif",
"/Projeto_04_parrotsCardGame/images/tripletsparrot.gif",
"/Projeto_04_parrotsCardGame/images/tripletsparrot.gif",
"/Projeto_04_parrotsCardGame/images/unicornparrot.gif",
"/Projeto_04_parrotsCardGame/images/unicornparrot.gif"
];


let embaralhar = cartas.slice(0, numero);
embaralhar.sort(comparador);

function comparador(){
    return Math.random() - 0.5;
}

function adicionarCartas(){
    for(let indice = 0; indice < embaralhar.length; indice++){
        lista.innerHTML+=`
        <ul class = "cartas" onClick="virarCarta(this)">
        <li class = "frente-carta"></li>
        <li class = "conteudo-carta"> <img class = "gif" src = "${embaralhar[indice]}"></li>`;
    }
}

adicionarCartas();