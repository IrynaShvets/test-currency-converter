import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

export const Address = styled.address`
  display: inline-flex;
`;

export const AddressText = styled.p`
  color: #642106;
  font-family: Raleway, sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

export const AddressLink = styled.a`
  color: #642106;
  font-size: 20px;
  font-weight: 400;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #a8451e;
  }
`;

export const Socials = styled.div`
  display: inline-flex;
  margin-left: 70px;
`;

export const SocialsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const SocialsItem = styled.li`
  margin-left: 10px;
`;

export const SocialsLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: #642106;
  background: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #642106;
  }
`;
