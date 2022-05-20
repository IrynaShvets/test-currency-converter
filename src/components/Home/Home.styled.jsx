import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 20px;
  border-radius: 5px;
  border: 0;
  background-color: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.14);
  }
`;

export const Text = styled.p`
  color: #642106;
  font-size: 38px;
  font-weight: 600;
`;
