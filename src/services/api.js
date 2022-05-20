import Axios from 'axios';

const API_KEY = 'ede3c756f1-46547e15bb-rc3422';
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
