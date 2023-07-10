import apiCurrency from "./js/scripts/apiCurrency";
const showResponse = document.getElementById("show-response");
console.log({ showResponse });
async function getConversion(from, to, amount) {
  const data = await apiCurrency.getConversion(from, to);
  const conversionValue = data.conversion_rate * amount;
  if (data.result) {
    printElements(conversionValue, from, to);
  } else {
    printError(data.message);
  }
}

function printElements(data, from, to) {
  console.log({ data });
  showResponse.innerHTML = `${to} is ${data} in ${from}`;
}

function printError(error) {
  showResponse.innerHTML = `The currency is not a real currency! ${error}`;
}

const cForm = document.getElementById("conversion-form");

const result = document.getElementById("result");

cForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const amount = document.getElementById("amount").value;
  console.log({ fromCurrency, toCurrency, amount });
  const rate = await getConversion(fromCurrency, toCurrency, amount);
  //   result.innerHTML = rate * parseInt(amount);
});
