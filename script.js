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