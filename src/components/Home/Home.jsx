import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { List, Item, Text } from './Home.styled';

const Home = ({ currencyOptions }) => {
  return (
    <>
      <List>
        {currencyOptions.map(currency => (
          <Item key={nanoid()}>
            <Text>{currency}</Text>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Home;

Home.propTypes = {
  currencyOptions: PropTypes.array.isRequired,
};
