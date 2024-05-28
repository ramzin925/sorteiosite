//Define uma variável global ´sorteioOption´ como uma string vazia. Esta variável armazenará a opção de sorteio selecionada pelo usuário.
let sorteioOption = '';

//Exibe um alerta informando ao usuário a opção de sorteio selecionada.
function setSorteioOption(option) {
  sorteioOption = option;
  alert(`Opção de sorteio selecionada: ${option}`);
}
//Exibe um alerta informando ao usuário a opção de sorteio selecionada.


//Obtém os valores mínimos e máximos dos campos de entrada inputMin e inputMax e os converte para inteiros.
//Verifica se os valores são números válidos e se min é menor que max. Se não forem válidos, exibe um alerta e interrompe a execução da função. 
function gerar() {
  const min = parseInt(document.getElementById('inputMin').value);
  const max = parseInt(document.getElementById('inputMax').value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert('Por favor, insira um intervalo válido.');
    return;
  }

  //Usa um LOOP para gerar números aleatórios entre o `min` e ´max´.
  let result = [];
  let numberOfResults = 1; 

  for (let i = 0; i < numberOfResults; i++) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (sorteioOption === 'repetir' || !result.includes(randNum)) {
      result.push(randNum);
    } else {
      i--;
    }
  }

//Se a opção de sorteio for 'crescente', o array result é ordenado em ordem crescente.
//Se a opção de sorteio for 'contagem', inicia uma contagem regressiva de 3 segundos antes de exibir o resultado.
//Usa setInterval para atualizar a contagem regressiva a cada segundo.
//Quando a contagem chega a zero, limpa o intervalo e exibe o resultado.
//Caso contrário, exibe o resultado imediatamente.

  if (sorteioOption === 'crescente') {
    result.sort((a, b) => a - b);
  }

  if (sorteioOption === 'contagem') {
    let countdown = 3;
    const countdownInterval = setInterval(() => {
      document.getElementById('resultado').innerHTML = `<p><mark style="background-color: red; border-radius: 5px; color: #FFFFFF;">Contagem regressiva: ${countdown}</mark></p>`;
      countdown--;
      if (countdown < 0) {
        clearInterval(countdownInterval);
        document.getElementById('resultado').innerHTML = `<p><mark style="background-color: red; border-radius: 5px; color: #FFFFFF;">Resultado: ${result.join(', ')}</mark></p>`;
      }
    }, 1000);
  } else {
    document.getElementById('resultado').innerHTML = `<p><mark style="background-color: red; border-radius: 5px; color: #FFFFFF;">Resultado: ${result.join(', ')}</mark></p>`;
  }
}

document.getElementById('inputMin').addEventListener('input', function() {
  const minVal = parseInt(this.value);
  const maxInput = document.getElementById('inputMax');
  if (minVal >= parseInt(maxInput.value)) {
    maxInput.value = minVal + 1;
  }
});

document.getElementById('inputMax').addEventListener('input', function() {
  const maxVal = parseInt(this.value);
  const minInput = document.getElementById('inputMin');
  if (maxVal <= parseInt(minInput.value)) {
    minInput.value = maxVal - 1;
  }
});

//O código permite ao usuário selecionar uma opção de sorteio e gerar números aleatórios dentro de um intervalo especificado.
//Inclui validações para garantir que o intervalo seja válido.
//Oferece funcionalidades adicionais como ordenação crescente e contagem regressiva antes de exibir o resultado.
//Atualiza os valores de inputMin e inputMax automaticamente para garantir um intervalo válido.

//O maior JS q fiz :p 
// 28/05/2024