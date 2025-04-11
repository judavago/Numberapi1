function fetchFact() {
    const number = document.getElementById('numberInput').value;
    const factDisplay = document.getElementById('fact');
  
    if (number === '') {
      factDisplay.textContent = 'Por favor, ingresa un número.';
      return;
    }
  
    fetch(`http://numbersapi.com/${number}`)
      .then(response => response.text())
      .then(fact => {
        factDisplay.textContent = fact;
      })
      .catch(error => {
        factDisplay.textContent = 'Error al consultar la API.';
        console.error(error);
      });
  }
  