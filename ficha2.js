//Exercicio 1 - IMC
function imc(peso, altura) {
    imc = peso / (altura^2);
    if (imc < 18.5) {
        console.log("abaixo do peso");
    }
    if (imc > 18.5 && imc < 25) {
        console.log("no peso normal");
    }
    if (imc > 25 && imc < 30) {
        console.log("acima de peso");
    }
    if (imc>30){
        console.log("obeso");
    }
}
imc(60,1.75);
//Exercicio 2 - Inverso