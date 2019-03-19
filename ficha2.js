//Exercicio 1 - IMC
function imc(peso, altura) {
    imc = peso / (altura ^ 2);
    if (imc < 18.5) {
        console.log("abaixo do peso");
    }
    if (imc > 18.5 && imc < 25) {
        console.log("no peso normal");
    }
    if (imc > 25 && imc < 30) {
        console.log("acima de peso");
    }
    if (imc > 30) {
        console.log("obeso");
    }
}
//Exercicio 2 - Inverso
function inverso(texto) {
    var str = texto.split(" ");
    var palavrareverse = '';
    for (i = 0; i < str.length; i++) {
        var palavra = str[i];
        for (j = palavra.length - 1; j >= 0; j--) {
            palavrareverse += palavra[j];
        }
        palavrareverse += ' ';
    }
    return palavrareverse;
}
// Exercicio 3 - Numero de vogais
function nvogais(texto) {
    res = 0;
    var array = ['a', 'e', 'i', 'o', 'u'];
    for (i = 0; i < texto.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (texto[i] == array[j]) {
                res += 1;
            }
        }
    }
    return res;
}
// Exercicio 4 - N de vezes a letra aparece
function abc(texto, letra) {
    var texto = texto.toLowerCase();
    res = 0;
    for (i = 0; i < texto.length; i++) {
        if (texto[i] == letra) {
            res += 1;
        }
    }
    return res;
}
// Exercicio 5 - Calcular horas de trabalho
function horas(entrada, saida) {
    total = 0;
    entradasec = 0;
    saidasec = 0;
    entrada = entrada.split(":");
    saida = saida.split(":");
    for (i = 0; i < entrada.length; i++) {
        if (i == 0) {
            entradasec += (entrada[0] * 3600);
            saidasec += (saida[0] * 3600);
        }
        if (i == 1) {
            entradasec += (entrada[1] * 60);
            saidasec += (saida[1] * 60);
        }
    }
    total = saidasec - entradasec;
    var minutos = total / 60;
    var resto_minutos = (total / 60) % 60;
    var horas = (minutos - resto_minutos) / 60;
    console.log(horas, resto_minutos);
}
// Exercicio 6 - Retangulos

function desenhaRetangulos(largura, altura) {
    linha = "";
    for (i = 0; i < largura; i++) {
        linha += "*";
    }
    for (i = 0; i < altura; i++) {
        console.log(linha);
    }
}
// Exercicio 7 - Desenha Triangulos
function desenhaTriangulos(altura) {
    linha = '*';
    for (i = 0; i < altura; i++) {
        console.log(linha);
        linha+='*';
    }
}