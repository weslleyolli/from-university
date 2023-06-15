const calculateBtn = document.getElementById('calculateBtn');
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const sumResult = document.getElementById('sum');
    const subtractionResult = document.getElementById('subtraction');
    const multiplicationResult = document.getElementById('multiplication');
    const divisionResult = document.getElementById('division');

    calculateBtn.addEventListener('click', calcularOperacoes);

    function calcularOperacoes() {
      const number1 = parseFloat(number1Input.value);
      const number2 = parseFloat(number2Input.value);

      if (isNaN(number1) || isNaN(number2)) {
        alert('Number invalid');
        return;
      }

      const resultSum = number1 + number2;
      const resultSubtraction = number1 - number2;
      const resultMultiplication = number1 * number2;
      const resultDivision = number1 / number2;

      sumResult.textContent = `Sum: ${resultSum}`;
      subtractionResult.textContent = `Subtraction: ${resultSubtraction}`;
      multiplicationResult.textContent = `Multiplication: ${resultMultiplication}`;
      divisionResult.textContent = `Division: ${resultDivision}`;
    }