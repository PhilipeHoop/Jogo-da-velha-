var jogador = "x";

function joga(celula){

    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;

        if(jogador == "x"){
            jogador = "o";
        }else {
            jogador = "x";
        }
    }
}

function reiniciar() {
    var quadrados = document.getElementsByClassName("quadrado");
    for (var i = 0; i < quadrados.length; i++) {
        quadrados[i].innerHTML = "";
    }
}

