function calcularArea() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  if (!a || !b || !c) {
    alert("Completá todos los valores.");
    return;
  }

  const area = ((a + c) / 2) * b;
  alert("El área del terreno es: " + area.toFixed(2) + " m²");
}
