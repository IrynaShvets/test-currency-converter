import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0 40px;
  font-weight: 700;
  font-size: 30px;
  color: #2c0d01;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
  &.active {
    color: #fff;
    text-shadow: 0 2px 1px #642106, 0 5px 4px #642106;
  }
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  width: 70%;
  height: auto;
  border-bottom: 2px solid #530c1f;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-image: linear-gradient(
    to right,
    #642106 10%,
    #a8451e 30%,
    #eb8c66 50%,
    #a8451e 70%,
    #642106
  );
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const ChangeColor = styled.span`
  color: #fff;
  transition: color 400ms cubic-bezier(0.4, 0, 0.3, 1);
  &:hover {
    color: #a8451e;
  }
`;
