let inputlargura = document.querySelector ("#largura");
let inputcomprimento = document.querySelector ("#comprimento");
let btcalcular = document.querySelector ("#btcalcular");
let area = document.querySelector ("#area");

btcalcular.onclick = function (){
    let largura = Number (inputlargura.value);
    let comprimento = Number (inputcomprimento.value);

    if (largura > 0 && comprimento > 0) {
        let resultado = largura * comprimento;
        area.textContent = `a area do terreno é: ${resultado} m²`;
    }else {
        area.textContent = `por favor insira valores validos`;
    }
}

//atividade 2
let inputcavalos = document.querySelector ("#cavalos");
let btsimular = document.querySelector ("#btsimular");
let resultado = document.querySelector ("#resultado");

btsimular.onclick = function (){
    let cavalos = Number (inputcavalos.value);

    const ferraduras = 4

    let necessarias = cavalos * ferraduras;

    resultado.textContent = `para ${cavalos} cavalos são necessárias ${necessarias} ferraduras`;
}


//atividade 3
let inputpaes = document.querySelector ("#paes");
let inputbroas = document.querySelector ("#broas");
let btcalcule = document.querySelector ("#btcalcule");
let arrecadado = document.querySelector ("#arrecadado");

btcalcule.onclick = function (){
    let p = Number (inputpaes.value);
    let b = Number (inputbroas.value);

    let paesValor = 0.12
    let broasValor = 1.50

    let total = (p * paesValor) + (b * broasValor);
    let poupanca = total * 0.10

    arrecadado.innerHTML = `total arrecadado: R$ ${total.toFixed(2)} <br>
valor a guardar na poupança (10%): R$ ${poupanca.toFixed(2)}`;
}

//atividade 4 
let inputnome = document.querySelector ("#nome");
let inputidade = document.querySelector ("#idade");
let btchecar = document.querySelector ("#btchecar");
let dias = document.querySelector ("#dias");

btchecar.onclick = function (){
    let nome = inputnome.value;
    let i = Number (inputidade.value);

    let diasVividos = i * 365

    dias.textContent = `${nome} você já viveu ${diasVividos} dias`;
}


//atividade 5
let inputgasolina = document.querySelector ("#gasolina");
let btabastecer = document.querySelector ("#btabastecer");
let tanque = document.querySelector ("#tanque");


btabastecer.onclick = function (){
    let g = Number (inputgasolina.value);

    let precog = 6.29
    let precoFinal = g / precog

    tanque.innerHTML = `o preço do litro da gasolina é R$6.29 (ultima verificação 21/05/2025) <br>
    você conseguiu abastecer ${precoFinal.toFixed(2)} litros
    `;
}


//atividade 6
let inputquilo = document.querySelector ("#quilo");
let btpesar = document.querySelector ("#btpesar");
let prato = document.querySelector ("#prato");

btpesar.onclick = function (){
    let quilo = Number (inputquilo.value);
    let preco = 12.00

    let notaFiscal = quilo * preco;

    prato.innerHTML = `o valor a pagar é R$ ${notaFiscal.toFixed(2)} por ${quilo} kg`;
}


//atividade 7
let inputdia = document.querySelector ("#dia");
let inputmes = document.querySelector ("#mes");
let bttempo = document.querySelector ("#bttempo");
let result = document.querySelector ("#result");

bttempo.onclick = function () {
    let dia = Number (inputdia.value);
    let mes = Number (inputmes.value);

    let diasPassados = (mes - 1) * 30 + dia;

    result.textContent = `ja se passaram ${diasPassados} desde o inicio do ano`;
}


//atividade 8
let inputpequenas = document.querySelector("#pequenas");
let inputmedias = document.querySelector("#medias");
let inputgrandes = document.querySelector("#grandes");
let btvalor = document.querySelector("#btvalor");
let informe = document.querySelector("#informe");

btvalor.onclick = function (){
    let p = Number (inputpequenas.value);
    let m = Number (inputmedias.value);
    let g = Number (inputgrandes.value);

    let pValor = 10
    let mValor= 12
    let gValor = 15

    let valorArrecadado = (p * 10) + (m * 12) + (g * 15)

    informe.textContent = `o valor arrecadado é R$ ${valorArrecadado.toFixed(2)}`;
}


//atividade 9
let inputx1 = document.querySelector ("#x1");
let inputy1 = document.querySelector ("#y1");
let inputx2 = document.querySelector ("#x2");
let inputy2 = document.querySelector ("#y2");
let btdistancia = document.querySelector ("#btdistancia");
let resulted = document.querySelector ("#resulted");

btdistancia.onclick = function (){
    let x1 = Number (inputx1.value);
    let y1 = Number (inputy1.value);
    let x2 = Number (inputx2.value);
    let y2 = Number (inputy2.value);

    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1,2));

    resulted.innerHTML = `A distância é: ${distancia.toFixed(2)}`;
}

//atividade 10
const inputdias = document.querySelector("#diasAcidente");
        const btdays = document.querySelector("#btdays");
        const days = document.querySelector("#resultadoAcidente");

        btdays.onclick = function () {
            const dias = Number(inputdias.value);
            console.log("Valor digitado:", inputdias.value); // debug

            if (isNaN(dias)) {
                days.textContent = "Por favor, insira um número válido.";
                return;
            }

            const ano = Math.floor(dias / 365);
            const restoAno = dias % 365;

            const mes = Math.floor(restoAno / 30);
            const dia = restoAno % 30;

            days.innerHTML = `${ano} ano(s), ${mes} mes(es), ${dia} dia(s)`;
        };

//atividade 11
let inputsalarioInicial = document.querySelector ("#salarioInicial");
let btsalario = document.querySelector ("#btsalario");
let resultadoSalario = document.querySelector ("#resultadoSalario");

btsalario.onclick = function (){
    let salario = Number (inputsalarioInicial.value);

    let aumento = 0.15
    let imposto = 0.08

    let salarioBruto = salario + (salario * aumento);
    let salarioLiquido = salario - (salarioBruto * imposto);

    resultadoSalario.innerHTML = `seu salario inicial é R$${salario.toFixed(2)} <br> com o aumento R$${salarioBruto.toFixed(2)} <br> seu salario final ja com descontos é R$${salarioLiquido.toFixed(2)}`;
}

//atividade 12
let inputnumero = document.querySelector ("#numero");
let btseparar = document.querySelector ("#btseparar");
let separacao = document.querySelector ("#separacao");

btseparar.onclick = function (){
    let numero = Number(inputnumero.value);

    let centena = Math.floor(numero / 100);
    let dezena = Math.floor((numero % 100) / 10);
    let unidade = numero % 10;

    separacao.innerHTML = `centenas = ${centena} <br> dezenas = ${dezena} <br> unidades = ${unidade}`;
}

//atividade 13
let inputraio = document.querySelector ("#raio");
let btcalcularPizza = document.querySelector ("#btcalcularPizza");
let resultadoPizza = document.querySelector ("#resultadoPizza");

btcalcularPizza.onclick = function (){
    let raio = Number(inputraio.value);
    let pi = 3.14;
    let area = pi * raio * raio;

    resultadoPizza.innerHTML = `a area da pizza com raio ${raio} é ${area.toFixed(2)}`;
}

//atividade 14
let inputvalores = document.querySelector ("#valores");
let btcalcularConta = document.querySelector ("#btcalcularConta");
let resultadoconta = document.querySelector ("#resultadoconta");

btcalcularConta.onclick = function (){
    let valores = Number (inputvalores.value);

    let parte = valores / 3;
    let Carlos = Math.floor(parte);
    let Andre = Math.floor(parte);
    let Felipe = (valores - Carlos - Andre);

    resultadoconta.innerHTML =`
        Carlos paga: R$ ${Carlos.toFixed(2)} <br>
        André paga: R$ ${Andre.toFixed(2)} <br>
        Felipe paga: R$ ${Felipe.toFixed(2)}
    `;
}