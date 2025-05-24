function calcularIMC() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  if (!altura || !peso) {
    alert("Por favor ingresá estatura y peso.");
    return;
  }

  const imc = peso / (altura * altura);
  alert("Tu IMC es: " + imc.toFixed(2));
}