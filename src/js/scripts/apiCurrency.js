export default class apiCurrency {
  static async getConversion(from, to) {
      try {
          const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${from}/${to}`);
          const json = await response.json();
          if (!response.ok) {
              const errorMessage = `${response.status} ${json['error-type']}`;
              throw new Error(errorMessage);
          }
          return json;
      } catch(error) {
          return error;
      }
  }
}
