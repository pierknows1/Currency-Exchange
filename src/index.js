import apiCurrency from "./js/scripts/apiCurrency";

async function fetchConversion(from, to) {
  try {
    const data = await apiCurrency.getConversion(from, to);
    return data.conversion_rate;
  } catch (error) {
    console.error(error);
  }
}

const cForm = document.getElementById("conversion-form");

const result = document.getElementById("result");

cForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const amount = document.getElementById("amount").value;
  console.log({ fromCurrency, toCurrency, amount });
  const rate = await fetchConversion(fromCurrency, toCurrency);
  result.innerHTML = rate * parseInt(amount);
});

// function fetchConversion() {
//   apiCurrency.getConversion()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('form');

//   form.addEventListener('submit', event => {
//     event.preventDefault();
//     fetchConversion();
//   });
// });

// // import fetch from "node-fetch";
// // import './css/fonts.css';
// // import './css/styles.css';

// // globalThis.fetch = fetch;

// // const url = 'https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD';
// // https://v6.exchangerate-api.com/v6/fe85d98e3455a344155098c6/latest/USD

// // const result = document.querySelector('.result');

// async function fetchData() {
//     const url = "https://v6.exchangerate-api.com/v6/fe85d98e3455a344155098c/pair/EUR/GBP";

//     try {

//         const response = await fetch(url);
//         const data = await response.json();
//         return data;
//     } catch (err) {

//         throw err;
//     }

// }

// // console.log(fetchData());
// export default fetchData;

// // node-fetch
// // npm install node-fetch

// //https://www.learnhowtoprogram.com/intermediate-javascript
