const produtos = {
 "123": {"nome": "Henrique e Juliano", "preco":9.0000},
 "456": {"nome": "Pantera cor de rosa", "preco":12.0000},
 "789": {"nome": "Rick Sanchez", "preco": 1.500},
 "147": {"nome": "Sans💀", "preco":37.0000},
}

let carrinho = [];
var tot=0;
const subt = document.getElementById("sub");
const tc = document.getElementById("tc");
const audio = new Audio("bip.mp3");

window.onload = () => {
    document.getElementById("cod").focus();
}

function addProduto(){
    const codtHtml = document.getElementById("cod");
    const qtdHtml = document.getElementById("qtd");

    const valorCod = codtHtml.value;
    const valorQtd = Number(qtdHtml.value);
    if(!produtos[valorCod]){
        AlertItem();
        return;
    }

    const infoProdutos = produtos[valorCod];

    const item  ={
        nome: infoProdutos.nome,
        preco: Number(infoProdutos.preco),
        quantidade: valorQtd,
        subtot: infoProdutos.preco * valorQtd,
    };
    subt.innerHTML = item.subtot.toFixed(2)
    tot=Number(tot+item.subtot);
    tc.innerHTML = tot.toFixed(2);
    carrinho.push(item);
    audio.currentTime=0;
    audio.play();
}

function atualizarTela(){
    document.getElementById("qtd").value = 1;
    document.getElementById("cod").value = "";
    document.getElementById("cod").focus();
};
atualizarTela();