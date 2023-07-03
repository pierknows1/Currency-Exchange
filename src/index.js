import apiCurrency from './js/scripts/apiCurrency';
// import { currency, currencyName } from './js/scripts/availableCode';


async function fetchConversion(amount, from, to) {
  try {
    const data = await apiCurrency.getConversion(amount, from, to);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchConversion(100, 'USD', 'EUR');




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