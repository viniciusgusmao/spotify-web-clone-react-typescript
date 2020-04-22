import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ArrowBack from 'assets/icons/arrowBack.png';
import ArrowForward from 'assets/icons/arrowForward.png';
import InputSearch from 'components/InputSearch';
import { useHistory } from 'react-router-dom';

const defaultProps = {
  currentPage: '/',
};

type Props = {
  currentPage: string;
  backgroundColor: string;
  opacity: number;
} & typeof defaultProps;

const Header: React.FC<Props> = ({ currentPage, backgroundColor, opacity }: Props) => {
  const history = useHistory();
  return (
    <>
      <div
        style={{
          backgroundColor,
          position: 'absolute',
          top: 0,
          left: 0,
          height: 60,
          zIndex: -2,
          width: '100%',
          transition: 'background-color 0.5s',
          opacity,
        }}
      />
      <BoxHeaderPage>
        <div>
          <img src={ArrowBack} alt="Voltar" onClick={() => history.goBack()} />
          <img src={ArrowForward} alt="Avançar" onClick={() => history.goForward()} />
          {currentPage == 'search' && <InputSearch />}
        </div>
        <div>
          <Button
            color="#fff"
            handleClick={() => {}}
            backgroundColor="#0B0B0B"
            title="Inscrever-se"
            fontSize={10}
          />
          <Button
            color="#000"
            handleClick={() => {}}
            backgroundColor="#fff"
            title="Entrar"
            fontSize={10}
          />
        </div>
      </BoxHeaderPage>
    </>
  );
};

const BoxHeaderPage = styled.div`
  display: flex;
  flex: 1;
  z-index: 99999;
  height: 60px;
  justify-content: space-between;
  padding: 10px 30px;
  div {
    &:first-child {
      display: flex;
      align-items: center;
      img {
        cursor: pointer;
      }
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

export default Header;
