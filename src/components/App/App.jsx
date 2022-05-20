import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from '../Navigation';

const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const CurrencyExchangePage = lazy(() =>
  import(
    '../../pages/CurrencyExchangePage' /* webpackChunkName: "currency-exchange-page" */
  ),
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage' /* webpackChunkName: "movies-page" */),
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/currency" element={<CurrencyExchangePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
