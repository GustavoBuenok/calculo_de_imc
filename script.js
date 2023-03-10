function calcularIMC() {

    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura*altura);
    var resultadoIMC = "Seu imc é: " + imc.toFixed(2)

    document.getElementById("resultado").innerHTML = resultadoIMC;
    

} 



