// Função responsável por gerar um número aleatório entre dois valores
function generateNumber() {

  // Pega o valor do input com a classe .input-min
  // Math.ceil() arredonda o número para cima e converte para inteiro
  const min = Math.ceil(document.querySelector(".input-min").value);

  // Pega o valor do input com a classe .input-max
  // Math.floor() arredonda o número para baixo e converte para inteiro
  const max = Math.floor(document.querySelector(".input-max").value);

  // Verifica se o valor mínimo é maior ou igual ao máximo
  if (min >= max) {
    // Exibe um alerta informando que o mínimo não pode ser maior que o máximo
    alert("Minimum value cannot be greater than maximum value.");
    
    // Encerra a função aqui (nada abaixo será executado)
    return;
  } else {
    // Calcula o número aleatório entre min e max
    const result = Math.floor(
      Math.random() * (max - min + 1) + min
    );

    // Exibe o número gerado em um alerta
    alert(result);
  }

}
