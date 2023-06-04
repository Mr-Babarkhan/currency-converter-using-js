function convertCurrency() {
    const Amount = parseFloat(document.getElementById('Amount').value);
    const fromCurrency = document.getElementById('From').value;
    const toCurrency = document.getElementById('To').value;
  
    fetch('conversion.json')
      .then(response => response.json())
      .then(conversion => {
        const convertedAmount = Amount * conversion[fromCurrency][toCurrency];
  
        const resultElement = document.getElementById('Result');
        resultElement.innerText = `${Amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => {
        console.error('Error loading conversion rates:', error);
      });
  }
  