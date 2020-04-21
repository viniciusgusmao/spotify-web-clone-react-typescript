import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const InputSearch: React.FC = () => (
  <Container>
    <FiSearch size={25} />
    <input type="text" placeholder="Busque artistas, músicas ou podcasts" />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 350px;
  background-color: white;
  justify-content: space-between;
  height: 97%;
  border-radius: 50px;
  margin-left: 15px;
  svg {
    margin-left: 10px;
  }
  input {
    border: none;
    padding: 5px;
    width: 300px;
    margin-right: 15px;
  }
`;

export default InputSearch;
