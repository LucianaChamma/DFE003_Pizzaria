//function sendForm() {
    // const pegaValorConta = document.getElementById("valorConta");
    // const pegaValorTaxa = document.getElementById("valorTaxa");
    // const pegaQuantidadePessoas = document.getElementById("quantidadePessoas");

    // if (pegaValorConta.value == "") {
    //     alert("Insira o valor da conta");

    // } else if (pegaValorTaxa.value == "") {
    //     alert("Insira o valor da taxa");

    // } else if (pegaQuantidadePessoas.value == "") {
    //     alert("Insira a quantidade de pessoas");

    // } else {
    //     formEvent();
//}

function calcularConta (){
    const pegaValorConta = document.getElementById("valorConta");
    const pegaValorTaxa = document.getElementById("valorTaxa");
    const pegaQuantidadePessoas = document.getElementById("quantidadePessoas");
    const calcValorFinal = (parseInt(pegaValorConta.value) + parseInt(pegaValorTaxa.value)) / parseInt(pegaQuantidadePessoas.value);

    document.getElementById("resultado").innerHTML = calcValorFinal;

}


function formEvent() {
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
    e.preventDefault();

    calcularConta();

    });

    }








