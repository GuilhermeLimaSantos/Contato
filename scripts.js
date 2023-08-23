document.getElementById("card").addEventListener("submit", function(event) {
  var campos = document.querySelectorAll("#card input[type='text'], #card input[type='email']";
  var formularioValido = true;

  campos.forEach(function(campo) {
    if (campo.value.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      formularioValido = false;
      event.preventDefault();
      return;
    }
  });

  if (formularioValido) {
    alert("Formulário enviado com sucesso!");
  }
});
