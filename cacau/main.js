function contarCaracteres() {
    var texto = document.getElementById("texto").value;
    contador = texto.length;
    document.getElementById("contador").textContent = contador;
  }
  document.getElementById("texto").addEventListener("input", contarCaracteres);
  