//Exercicio 1 - MEDIA
function media(nota1, nota2) {
    var med = (nota1 + nota2) / 2;
    return med;
}
//Exercicio 2 - MESES POR EXTENSO
function meses(valor) {
    var mes = ["", "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    var resultado = mes[valor];
    return resultado;
}
//Exercicio 3 - CALCULADORA
function operacao(v1, v2, op) {
    if (op == "+") {
        res = v1 + v2;
        return res;
    }
    if (op == "-") {
        res = v1 - v2;
        return res;
    }
    if (op == "*") {
        res = v1 * v2;
        return res;
    }
    if (op == "/") {
        res = v1 / v2;
        return res;
    }
}
//Exercicio 4 - MULTIPLOS DE 5
function multiplos() {
    for (val = 0; val <= 4; val++) {
        res = val * 5
        console.log("5 X", val, " = ", res);
    }
}
//Exercicio 5 - SOMA DOS 100 PRIMEIROS NUMEROS
function somacem() {
    var res = 0;
    for (i = 0; i <= 100; i++) {
        res = res + i;
    }
    return res;
}
//Exercicio 7 - Max med min
function max(array) {
    var m = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > m) {
            m = array[i];
        }
    }
    return m;
}

function min(array) {
    var m = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < m) {
            m = array[i];
        }
    }
    return m;
}

function med(array) {
    var total = array.length;
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma = soma + array[i]    
    }
    media = soma / total;
    return media;
}