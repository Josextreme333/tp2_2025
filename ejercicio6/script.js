function validar() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseInt(document.getElementById("altura").value);
  const correo = document.getElementById("correo").value.trim();
  const resultado = document.getElementById("resultado");

  let errores = [];

  if (!nombre || nombre.length > 50) errores.push("Nombre inválido");
  if (!apellido || apellido.length > 50) errores.push("Apellido inválido");
  if (isNaN(edad) || edad < 0 || edad < 18) errores.push("Edad inválida");
  if (isNaN(altura) || altura < 0 || altura > 230) errores.push("Altura inválida");
  if (!correo.includes("@") || correo === "") errores.push("Correo inválido");

  if (errores.length === 0) {
    resultado.style.color = "green";
    resultado.textContent = "Validación exitosa";
  } else {
    resultado.style.color = "red";
    resultado.textContent = errores.join(" | ");
  }
}
