import apiCurrency from "./js/scripts/apiCurrency";

async function getConversion(from, to) {
    const data = await apiCurrency.getConversion(from, to);
    if (data.result){
      printElements(data, from, to);
    } else {
      printError(data, from, to);
  }
}


function printElements(data, from, to){
  document.querySelector("show-response").innerText =`${to} is ${data.conversion_result} in ${from}`;
}

function printError(error){
  document.querySelector("show-response").innerText =`The currency is not a real currency! ${error}`;
}


const cForm = document.getElementById("conversion-form");

const result = document.getElementById("result");

cForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const amount = document.getElementById("amount").value;
  console.log({ fromCurrency, toCurrency, amount });
  const rate = await getConversion(fromCurrency, toCurrency);
  result.innerHTML = rate * parseInt(amount);
});