let inputNumber1 = document.querySelector ("#inputNumber1");
let inputNumber2 = document.querySelector ("#inputNumber2");
let btSomar = document.querySelector ("#btSomar");
let resultado = document.querySelector ("#resultado");

btSomar.onclick = function() {
    //convertendo os valores do input em numeros
    let num1 = Number(inputNumber1.value);
    let num2 = Number(inputNumber2.value);

    //calcula a soma e exibe o resultado
    let soma = num1 + num2;
    resultado.textContent = `a soma dos dois numeros é = ${soma}`;
}

//atividade 1
let inputvalorPago = document.querySelector("#valorPago");
let inputprecoProduto = document.querySelector("#precoProduto");
let btTroco = document.querySelector("#btTroco");
let calculoTroco = document.querySelector("#calculoTroco");

btTroco.onclick = function (){
   let valorPago = parseFloat(inputvalorPago.value);
   let precoProduto = parseFloat(inputprecoProduto.value);

   let troco = valorPago - precoProduto;
   calculoTroco.textContent = `o troco a ser devolvido é R$ ${troco.toFixed(2)}`;
 
}

//atividade 2
let inputvalorQuilo = document.querySelector("#valorQuilo");
let inputquantidade = document.querySelector("#quantidade");
let btAPagar = document.querySelector("#btAPagar");
let precoDoQuilo = document.querySelector("#precoDoQuilo");

btAPagar.onclick = function(){
    let valorQuilo = parseFloat(inputvalorQuilo.value);
    let quantidade = parseFloat(inputquantidade.value);

    let preco = valorQuilo * quantidade;
    precoDoQuilo.textContent = `o valor a ser pago é R$ ${preco.toFixed(2)}`;

}


//atividade 3
let inputsaldo1 = document.querySelector("#saldo1");
let btreajuste = document.querySelector("#btreajuste");
let imprimir = document.querySelector("#imprimir");

btreajuste.onclick = function() {
    let saldo1 = parseFloat(inputsaldo1.value);

    let reajuste = saldo1 * 0.01;
    let saldoFinal = saldo1 + reajuste;
    imprimir.textContent = `O saldo com reajuste é de R$ ${saldoFinal.toFixed(2)}`;

    
}

//atividade 4
let inputprimeiro = document.querySelector("#primeiro");
let inputsegundo = document.querySelector("#segundo");
let inputterceiro = document.querySelector("#terceiro");
let btcalcular = document.querySelector("#btcalcular");
let imprint = document.querySelector("#imprint");

btcalcular.onclick = function (){
let primeiro = parseFloat(inputprimeiro.value);
let segundo = parseFloat(inputsegundo.value);
let terceiro = parseFloat(inputterceiro.value);


    let aritmetica = (primeiro + segundo + terceiro)/3;
    let ponderada = (primeiro * 1 + segundo * 2 + terceiro * 3) / (1 + 2 + 3); 
    let soma = aritmetica + ponderada;
    let media = soma/2;

    imprint.innerHTML = 
    `A média aritmética dos números é: ${aritmetica.toFixed(2)}<br>` +
    `A média ponderada dos números é: ${ponderada.toFixed(2)} <br>` +
    `A soma das duas médias é: ${soma.toFixed(2)} <br>` +
    `A média das médias é: ${media.toFixed(2)}`;
}

//atividade 5
let inputprimeirovalor = document.querySelector("#primeirovalor");
let inputsegundovalor = document.querySelector("#segundovalor");
let btcalcule = document.querySelector("#btcalcule");
let calcule = document.querySelector("#calcule");

btcalcule.onclick = function (){
    let primeirovalor = parseFloat(inputprimeirovalor.value);
    let segundovalor = parseFloat(inputsegundovalor.value);

    if (primeirovalor > segundovalor) {
        maior.textContent = `o valor maior é: ${primeirovalor}`;

    } else if (segundovalor > primeirovalor) {
        maior.textContent = `o valor maior é: ${segundovalor}`;
    
    } else {
        maior.textContent = `os valores são iguais`
    }
}

//atividade 6
let inputvalor1 = document.querySelector("#valor1");
let inputvalor2 = document.querySelector("#valor2");
let inputvalor3 = document.querySelector("#valor3");
let inputvalor4 = document.querySelector("#valor4");
let btcalculo = document.querySelector("#btcalculo");
let menor = document.querySelector("#menor");

btcalculo.onclick = function (){
    let valor1 = parseFloat(inputvalor1.value);
    let valor2 = parseFloat(inputvalor2.value);
    let valor3 = parseFloat(inputvalor3.value);
    let valor4 = parseFloat(inputvalor4.value);

    let menorValor = Math.min(valor1, valor2, valor3, valor4);

    menor.textContent = `o menor valor é: ${menorValor}`;

}


//atividade 7
let inputvalor = document.querySelector("#valor");
let btverificar = document.querySelector("#btverificar");
let verifique = document.querySelector("#verifique");

btverificar.onclick = function (){
    let valor = parseInt(inputvalor.value);

    if (valor % 2 === 0) {
        verifique.textContent =`o numero ${valor} é par`;
    } else {
        verifique.textContent = `o numero ${valor} é impar`;
    }
};