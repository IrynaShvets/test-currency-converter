import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CurrencyExchange from '../components/CurrencyExchange';
import Loader from '../components/Loader';
import { apiAllCurrency, apiCurrencyFromTo } from '../services/api';

function CurrencyExchangePage() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState('UAH');
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let fromAmount, toAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    const fetchApiAllCurrency = async () => {
      setLoading(true);
      try {
        const { results, base } = await apiAllCurrency();
        const firstCurrency = Object.keys(results)[0];
        setCurrencyOptions([base, ...Object.keys(results)]);
        setFromCurrency(base);
        setToCurrency(toCurrency);
        setExchangeRate(results[firstCurrency]);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApiAllCurrency();
  }, [toCurrency, error]);

  useEffect(() => {
    const fetchApiCurrencyFromTo = async () => {
      setLoading(true);
      try {
        const { results } = await apiCurrencyFromTo(fromCurrency, toCurrency);
        setExchangeRate(results[toCurrency]);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (fromCurrency != null && toCurrency != null) {
      fetchApiCurrencyFromTo();
    }
  }, [toCurrency, fromCurrency, error]);

  const handleFromChangeAmount = e => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToChangeAmount = e => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <>
        <h2 className="title">Convert</h2>

        <CurrencyExchange
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromChangeAmount}
        />

        <div className="total">=</div>

        <CurrencyExchange
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToChangeAmount}
        />
      {error && toast.error(error.message)}
      {loading && <Loader />}
    </>
  );
}

export default CurrencyExchangePage;
