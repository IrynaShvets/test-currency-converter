import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BsCurrencyExchange } from 'react-icons/bs';
import Loader from '../Loader';
import { StyledNavLink, Header, Nav, ChangeColor } from './Navigation.styled';

function Navigation() {
  return (
    <>
      <Header>
        <Nav>
          <ChangeColor>
            <BsCurrencyExchange
              style={{ width: 80, height: 80, marginRight: 20 }}
            />
          </ChangeColor>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="currency">Currency exchange</StyledNavLink>
          <StyledNavLink to="contacts">Contacts</StyledNavLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Navigation;
