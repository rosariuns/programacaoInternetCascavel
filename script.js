let inputnota1bim = document.querySelector ("#nota1bim");
let inputnota2bim = document.querySelector ("#nota2bim");
let btaprovacao = document.querySelector ("#btaprovacao");
let h3resultado = document.querySelector ("#h3resultado");

function calcularMediaAluno(){

    //retornando valores dos iinputs e convertendo em numeros
    let nota1 = Number(inputnota1bim.value);
    let nota2 = Number(inputnota2bim.value);
    //calculando a media
    let media = (nota1 + nota2) / 2;

    //verificar se o aluno está aprovado ou nao
    if (media >= 60){
        h3resultado.textContent = `aprovado`;
    }else{
        h3resultado.textContent = `reprovado`;
    }
}
btaprovacao.onclick = function(){
    calcularMediaAluno();
}

//atividade 1
let inputvalordolar = document.querySelector ("#valordolar");
let btcalcular = document.querySelector ("#btcalcular");
let cotacao = document.querySelector ("#cotacao");

btcalcular.onclick = function (){
    let valordolar = parseFloat(inputvalordolar.value);

    let calcular1 = valordolar * 0.01;
    let calcular2 = valordolar * 0.02;
    let calcular3 = valordolar * 0.05;
    let calcular4 = valordolar * 0.10;

    let com1porcento = valordolar + calcular1;
    let com2porcento = valordolar + calcular2;
    let com5porcento = valordolar + calcular3;
    let com10porcento = valordolar + calcular4;

    cotacao.innerHTML = 
    `a cotação do dolar com 1% de aumento é: $${com1porcento.toFixed(2)}<br>` +
    `a cotação do dolar com 2% de aumento é: $${com2porcento.toFixed(2)} <br>` +
    `a cotação do dolar com 5% de aumento é: $${com5porcento.toFixed(2)} <br>` +
    `a cotação do dolar com 10% de aumento é: $${com10porcento.toFixed(2)}`;
}

//atividade 2
let inputquantasPessoas = document.querySelector("#quantasPessoas");
let btsimular = document.querySelector("#btsimular");
let receita = document.querySelector("#receita");

btsimular.onclick = function(){
    let quantasPessoas = parseFloat(inputquantasPessoas.value);

    let ovos = quantasPessoas * 2;
    let queijo = quantasPessoas * 0.50;

    receita.innerHTML = `
    ${Math.round(ovos)} ovos<br>
    ${Math.round(queijo)} g de queijo`;
}

//atividade 3 
let inputnumero1 = document.querySelector("#numero1");
let inputnumero2 = document.querySelector("#numero2");
let btcalculo = document.querySelector("#btcalculo");
let resultado = document.querySelector("#resultado");

btcalculo.onclick = function (){
    let n1 = Number (inputnumero1.value);
    let n2 = Number (inputnumero2.value);

    let somar = (n1 + n2);
    let subtrair = (n1 - n2);
    let multiplicar = (n1 * n2);
    let dividir = (n1 / n2);


    resultado.innerHTML = `
    soma = ${n1} + ${n2} = ${somar} <br>
    substração = ${n1} - ${n2} = ${subtrair} <br>
    multiplicação = ${n1} . ${2} = ${multiplicar} <br>
    divisão = ${n1} / ${n2} = ${dividir}
    `;
}

//atividade 4
let inputsabor1 = document.querySelector("#sabor1");
let inputsabor2 = document.querySelector("#sabor2");
let inputsabor3 = document.querySelector("#sabor3");
let inputsabor4 = document.querySelector("#sabor4");
let inputrefri = document.querySelector("#refri");
let btpedido = document.querySelector("#btpedido");
let pedido = document.querySelector("#pedido");

btpedido.onclick = function (){
    let sabor1 = (inputsabor1.value);
    let sabor2 = (inputsabor2.value);
    let sabor3 = (inputsabor3.value);
    let sabor4 = (inputsabor4.value);
    let refri = (inputrefri.value);

    const precoPizza = 12
    const precoRefri = 7

    let totalPrecoPizza = 4 * precoPizza;
    let totalPrecoRefri = refri * precoRefri;
    let totalAPagar = totalPrecoPizza + totalPrecoRefri;

    pedido.innerHTML = `
    Sabores ecolhidos: ${sabor1}, ${sabor2}, ${sabor3} e ${sabor4} <br>
    Quantidade de refrigerantes: ${refri} <br>
    Total a pagar: ${totalAPagar.toFixed(2)}
    `;
}