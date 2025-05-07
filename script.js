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
    let saldo1 = parseFloat(inputNumber1.value);

    let reajuste = saldo1 * 1/100;
    imprimir.textContent = `o saldo com reajuste é de = R$ ${imprimir.toFixed(2)}`;
    
}