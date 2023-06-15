const printBtn = document.getElementById('printBtn');
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('lastname');
    const nameComplete = document.getElementById('nameComplete');

    printBtn.addEventListener('click', printNames);

    function printNames() {
      const name = nameInput.value;
      const lastName = lastNameInput.value;

      if (name && lastName) {
        const nameCompleteString = `${name} ${lastName}`;
        nameComplete.textContent = `Name complete: ${nameCompleteString}`;
      }
    }