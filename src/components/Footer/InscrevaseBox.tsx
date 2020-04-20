import React from 'react';
import Button from 'components/Button';
import styled from 'styled-components';

const InscrevaseBox: React.FC = () => (
  <BoxFooter>
    <div>
      <div>
        <span className="title">AMOSTRA DO SPOTIFY</span>
        <span className="subtitle">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de
          cartão de crédito.{' '}
        </span>
      </div>
    </div>
    <Button
      handleClick={() => {}}
      color="#498DD7"
      backgroundColor="#fff"
      title="Inscreva-se grátis"
    />
  </BoxFooter>
);

const BoxFooter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  background-image: linear-gradient(to right, #af2896, #509bf5);
  padding: 15px 40px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      color: white;
      padding: 20;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      span.title {
        font-size: 12px;
        letter-spacing: 1.76px;
        margin-bottom: 6px;
      }
      span.subtitle {
        font-size: 15px;
      }
    }
  }
`;

export default InscrevaseBox;
