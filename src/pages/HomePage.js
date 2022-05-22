import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import Home from '../components/Home';
import { apiAllCurrency } from '../services/api';

function HomePage() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApiAllCurrency = async () => {
      setLoading(true);
      try {
        const { results } = await apiAllCurrency();
        setCurrencyOptions([...Object.keys(results)]);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApiAllCurrency();
  }, [error]);

  return (
    <>
      <h1 className="title">List of currencies</h1>
      <Home currencyOptions={currencyOptions} />
      {loading && <Loader />}
      {error && toast.error(error.message)}
    </>
  );
}

export default HomePage;
