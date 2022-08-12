import Axios from 'axios';

const API_KEY = '99e89d5146-5a6b80f611-rgi8n6';
const BASE_URL = 'https://api.fastforex.io';

export const apiAllCurrency = async () => {
  const response = await Axios.get(`${BASE_URL}/fetch-all?api_key=${API_KEY}`);
  return response.data;
};

export const apiCurrencyFromTo = async (fromCurrency, toCurrency) => {
  const response = await Axios.get(
    `${BASE_URL}/fetch-all?api_key=${API_KEY}&from=${fromCurrency}&to=${toCurrency}`,
  );
  return response.data;
};
