
export default class apiCurrency {
    static async getConversion(amount, from, to) {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/fe85d98e3455a344155098c6/pair/${amount}/${from}/${to}/`);
  
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }
  
        return response.json();
      } catch (error) {
        return { error: error.message };
      }
    }
  }