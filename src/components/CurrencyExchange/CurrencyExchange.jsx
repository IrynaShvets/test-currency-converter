import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input, Select } from './CurrencyExchange.styled';

function CurrencyExchange(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <div>
      {amount && (
        <Input type="number" value={amount} onChange={onChangeAmount} />
      )}
      <Select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={nanoid()} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default CurrencyExchange;

CurrencyExchange.propTypes = {
  currencyOptions: PropTypes.array.isRequired,
  selectedCurrency: PropTypes.string,
  onChangeCurrency: PropTypes.func.isRequired,
  amount: PropTypes.node.isRequired,
  onChangeAmount: PropTypes.func.isRequired,
};
