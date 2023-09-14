function calculate() {
    // Obtener los valores de los input
    var num1 = parseFloat(document.getElementById("inputNumber1").value);
    var num2 = parseFloat(document.getElementById("inputNumber2").value);

    // Realizar la operación
    var resultado = (num1 / num2) * 61;
    
    // Redondear el resultado a dos decimales
    resultado = resultado.toFixed(2);

    // Dividir el resultado por 2
    resultado = (parseFloat(resultado) / 2).toFixed(2);

    // Mostrar el resultado en el elemento <p>
    document.getElementById("result").textContent = "Consumo ponderado: " + resultado + " kWh";
}


function resetCalculator() {
    // Limpiar los campos de entrada
    document.getElementById("inputNumber1").value = "";
    document.getElementById("inputNumber2").value = "";

    // Restablecer el resultado a cero
    document.getElementById("result").textContent = "Consumo ponderado: ";
}