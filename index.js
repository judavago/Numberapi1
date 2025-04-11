function getFact() {
    const number = document.getElementById("numberInput").value;
    const factText = document.getElementById("factText");
  
    if (number === "") {
      factText.innerText = "Por favor ingresa un número.";
      return;
    }
  
    fetch(`http://numbersapi.com/${number}`)
      .then(response => response.text())
      .then(data => {
        factText.innerText = data;
      })
      .catch(error => {
        console.error("Error al obtener el dato:", error);
        factText.innerText = "Hubo un error al obtener el dato.";
      });
  }
  