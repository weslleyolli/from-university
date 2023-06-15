const checkBtn = document.getElementById('checkBtn');
    const numeroInput = document.getElementById('numero');
    const dataType = document.getElementById('dataType');

    checkBtn.addEventListener('click', checkDataType);

    function checkDataType() {
      const inputValue = numeroInput.value;
      const parsedValue = parseFloat(inputValue);

      if (isNaN(parsedValue)) {
        dataType.textContent = 'The entered data is of type: string';
      } else if (Number.isInteger(parsedValue)) {
        dataType.textContent = 'The entered data is of type: integer';
      } else {
        dataType.textContent = 'The entered data is of type: float';
      }
    }