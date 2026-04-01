const cria = document.getElementById("b");

const estados = {
    normal: "Criatura fofa flutuante em tons pastéis.png",
    puto: "Criatura furiosa e luminosa.png",
    morto: "Criatura fantasmal flutuante e fofa.png",
    comendo: "Criatura fofa comendo paçoca.png",
    alimentado: "Criatura fofa flutuante em tons pastéis.png",
};

let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;

let fundoAtivo = true;

function limparBackground() {
    if (fundoAtivo) {
        document.body.style.backgroundImage = "none";
        fundoAtivo = false;
    } else {
        document.body.style.backgroundImage = "url('background.png')";
        fundoAtivo = true;
    }
}

function controlador() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;

        if (contador == 30) {
            cria.src = estados.puto;
        }

        if (contador == 60) {
            cria.src = estados.morto;
        }
    }, 1000);
}

controlador();

function alimentar() {
    cria.src = estados.comendo;
    contador = 0;

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = estados.alimentado;

        time_out = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}

function definirNome() {
    const nome = document.getElementById("inputNome").value;
    const titulo = document.getElementById("nomePet");

    if (nome.trim() !== "") {
        titulo.innerText = nome;
    }
}