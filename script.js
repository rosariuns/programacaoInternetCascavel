let inputvalorx = document.querySelector ("#valorx");
let inputvalory = document.querySelector ("#valory");
let inputvalorz = document.querySelector ("#valorz");
let btcalcular = document.querySelector ("#btcalcular");
let resultado = document.querySelector ("#resultado");

btcalcular.onclick = function (){
    let x = Number (inputvalorx.value);
    let y = Number (inputvalory.value);
    let z = Number (inputvalorz.value);

    if (x < y + z && y < x + z && z < x + y) {
        if (x === y && y === z) {
            resultado.textContent = `Equiláteros: tem os comprimentos dos três lados iguais`;
        } else if (x === y || y === z || x === z) {
            resultado.textContent = `Isósceles: tem os comprimentos de dois lados iguais`;
        } else {
            resultado.textContent = `Escaleno: tem os comprimentos de três lados diferentes`;
        }
    } else {
        resultado.textContent = `Os valores informados não formam um triângulo.`;
        }
    };


//atividade 2
let inputaltura = document.querySelector ("#altura");
let inputpeso = document.querySelector ("#peso");
let btcalculo = document.querySelector ("#btcalculo");
let result = document.querySelector ("#result");

btcalculo.onclick = function (){
   let altura = Number (inputaltura.value);
   let peso = Number (inputpeso.value);

       if (altura <= 0 || peso <= 0) {
        result.innerHTML = "Por favor, insira valores válidos para altura e peso.";
        return;
    }

   let imc = peso / (altura * altura);
      let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    result.innerHTML = `<h4> seu imc é ${imc.toFixed(2)} — ${classificacao}<h4> <br> <br> <br>
     Abaixo de 18.5 → Abaixo do peso <br>
     18.5 a 24.9 → Peso normal <br>
     25 a 29.9 → Sobrepeso <br>
     30 a 34.9 → Obesidade grau 1 <br>
     35 a 39.9 → Obesidade grau 2 <br>
     40+ → Obesidade grau 3.` 
}


//atividade 3 
let inputano = document.querySelector ("#ano");
let inputvalorcarro = document.querySelector ("#valorcarro");
let btimposto = document.querySelector ("#btimposto");
let impost = document.querySelector ("#impost");

btimposto.onclick = function () {
    ano = Number (inputano.value);
    valorcarro = Number (inputvalorcarro.value);

    let taxa = 0

    if (ano < 1990) {
        taxa = 0.01;
    } else {
        taxa = 0.15;
    }

    let imposto = valorcarro * taxa;

    impost.textContent =`o imposto a pagar é: R$ ${imposto.toFixed(2)} (${(taxa * 100).toFixed(1)}%)`;
}

//atividade 4
let inputsalario = document.querySelector ("#salario");
let inputcargo = document.querySelector("#cargo");
let btsalario = document.querySelector("#btsalario");
let gerador = document.querySelector("#gerador");

btsalario.onclick = function(){
    let salario = Number(inputsalario.value);
    let cargo = inputcargo.value.trim().toLowerCase();

    if (salario <= 0 || cargo === ""){
        gerador.innerHTML = `por favor, preencha corretamente o salario e o cargo`;
        return;
    }
    
    let percentual = 0;

    if (cargo === "gerente") {
        percentual = 0.10;
    } else if (cargo === "engenheiro") {
        percentual = 0.20;
    }else if (cargo === "tecnico") {
        percentual = 0.30;
    } else {
        percentual = 0.40;
    }
    
    let aumento = salario * percentual;
    let novoSalario = salario + aumento;

    gerador.innerHTML = `${cargo.charAt(0).toUpperCase() + cargo.slice(1)} <br>
    salario antigo: R$ ${salario.toFixed(2)}<br>
    novo salario: R$ ${novoSalario.toFixed(2)}<br>
    aumento: R$ ${aumento.toFixed(2)} (${(percentual * 100)}%)
    `;
}

//atividade 5
let inputsaldoMedio = document.querySelector ("#saldoMedio");
let btsaldo = document.querySelector ("#btsaldo");
let creditario = document.querySelector("#creditario");

btsaldo.onclick = function(){
    let saldoMedio = Number(inputsaldoMedio.value);
    let porcent = 0;

    if (saldoMedio < 0){
        creditario.innerHTML = `saldo invalido`;
        return;
    }

    if (saldoMedio <= 200){
        porcent = 0;
    } else if (saldoMedio <= 400) {
        porcent = 0.20;
    } else if (saldoMedio <= 600){
        porcent = 0.30;
    } else {
        porcent = 0.40
    }
    
    let credito = saldoMedio * porcent;

    creditario.innerHTML = `saldo medio: R$${credito.toFixed(2)} (${porcent * 100}%)`;
}

//atividade 6
let inputprodutos = document.querySelector ("#inputprodutos");
let inputquantidade = document.querySelector ("#quantidade");
let btgere = document.querySelector ("#btgere");
let geradot = document.querySelector ("#geradot")

btgere.onclick = function (){
    let produto = inputprodutos.value.trim().toLowerCase();
    let quantidade = Number(inputquantidade.value);
    let preco = 0;

    if (produto === "cachorro quente") {
        preco = 11.00;
    } else if (produto === "bauru") {
        preco = 8.50;
    } else if ( produto === "misto quente") {
        preco = 8.00;
    } else if (produto === "hamburguer") {
        preco = 9.00;
    } else if (produto === "cheeseburguer") {
        preco = 10.00;
    } else if (produto === "refrigerante") {
        preco = 4.50
    } else {
        geradot.innerHTML = `produto invalido`;
        return;
    }
    
    if (quantidade <= 0){
        geradot.innerHTML = `por favor digite uma quantidade valida`;
        return;
    }

    let total = preco * quantidade;

    geradot.innerHTML = `produto: ${produto.charAt(0).toUpperCase() + produto.slice(1)}<br>
    quantidade: ${quantidade}<br>
    total a pagar: R$${total.toFixed(2)}`;
}

//atividade 7
let inputtributo = document.querySelector ("#tributo");
let selectcondicao = document.querySelector("#condicao");
let btcalc = document.querySelector ("#btcalc");
let valorNota = document.querySelector ("#valorNota");

btcalc.onclick = function (){
    let tributo = Number(inputtributo.value);
    let condicao = selectcondicao.value;

    if (tributo <= 0 || condicao === "") {
        valorNota.innerHTML = `preencha o preço e escolha uma condiçao de pagamento`;
        return;
    }

    let final = tributo;
    let info = "";

    if (condicao === "a") {
        final = tributo * 0.90;
        info = "10% de desconto (à vista em dinheiro ou cheque)";
    } else if (condicao === "b") {
        final = tributo * 0.85;
        info = "15% de desconto (à vista no cartão)";
    } else if (condicao === "c") {
        final = tributo;
        info = "2x sem juros";
    } else if (condicao === "d") {
        final = tributo * 1.10;
        info = "10% de juros (2x com juros)";
    }

    valorNota.innerHTML = `preço original: R$${tributo.toFixed(2)}<br>
    condição: ${info}<br>
    total a pagar: R$${final.toFixed(2)}`;
}

//atividade 8
let inputnivel = document.querySelector("#nivel");
let inputhoras = document.querySelector("#horas");
let btnotaprof = document.querySelector("#btnotaprof");
let notad = document.querySelector("#notad");

btnotaprof.onclick = function (){
    let nivel = Number(inputnivel.value);
    let horas = Number(inputhoras.value);

    if ((nivel < 1 || nivel > 3) || horas <= 0) {
        notad.innerHTML = `Preencha corretamente o nível (1 a 3) e a quantidade de horas.`;
        return;
    }

    let valorHora = 0;

    if (nivel === 1) {
        valorHora = 12;
    } else if (nivel === 2) {
        valorHora = 17;
    } else if (nivel === 3) {
        valorHora = 25;
    }

    let salarioprof = valorHora * horas * 4.5;

    notad.innerHTML = `nivel: ${nivel}<br>
    valor por hora/aula: R$${valorHora.toFixed(2)}<br>
    total de horas por semana: ${horas}
    salario mensal: <strong>R$${salarioprof.toFixed(2)}</strong>`;
}