import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function HeaderPage() {
  return (
    <BoxHeaderPage>
      <div>
        <IoIosArrowBack size={30} color="#646464" />
        <IoIosArrowForward size={30} color="#646464" />
      </div>
      <div>
        <Button color="#fff" backgroundColor="#0B0B0B" title="Inscrever-se" fontSize={12} />
        <Button color="#000" backgroundColor="#fff" title="Entrar" fontSize={12} />
      </div>
    </BoxHeaderPage>
  );
}

const BoxHeaderPage = styled.div`
  display: flex;
  flex: 1;
  height: 60px;
  justify-content: space-between;
  background-color: #0B0B0B;
  padding: 10px 30px;
  div{
    width: 50%;
    &:first-child{
      display: flex;
      align-items: center;
      svg:first-child{
        margin-right: 18px;
      }
    }
    &:last-child{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      button:first-child{
        margin-right: 10px;
      }
    }
  }
`;
