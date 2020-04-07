import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ArrowBack from 'assets/icons/arrowBack.png';
import ArrowForward from 'assets/icons/arrowForward.png';

export default function Header() {
  return (
    <BoxHeaderPage>
      <div>
        <img src={ArrowBack} />
        <img src={ArrowForward} />
      </div>
      <div>
        <Button color="#fff" backgroundColor="#0B0B0B" title="Inscrever-se" fontSize={10} />
        <Button color="#000" backgroundColor="#fff" title="Entrar" fontSize={10} />
      </div>
    </BoxHeaderPage>
  );
}

const BoxHeaderPage = styled.div`
  display: flex;
  flex: 1;
  height: 60px;
  justify-content: space-between;
  background-color: #0b0b0b;
  padding: 10px 30px;
  div {
    width: 50%;
    &:first-child {
      display: flex;
      align-items: center;
      img:first-child {
        margin-right: 18px;
      }
    }
    &:last-child {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      button:first-child {
        margin-right: 10px;
      }
    }
  }
`;
