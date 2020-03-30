import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Button from 'components/Button';

const { Footer: Ftr } = Layout;

// eslint-disable-next-line no-underscore-dangle
export default function Footer() {
  return (
    <Ftr style={{ backgroundImage: 'linear-gradient(to right, #AF2896,#509BF5)', height: 80, paddingTop: 0, paddingBottom: 0 }}>
      <BoxFooter>
        <div>
          <div>
            <span className="title">AMOSTRA DO SPOTIFY</span>
            <span className="subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito. </span>
          </div>
        </div>
        <Button color="#498DD7" backgroundColor="#fff" title="Inscreva-se grátis" />
      </BoxFooter>
    </Ftr>
  );
}

const BoxFooter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
      color: white;
      padding: 20;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      span.title{
        font-weight: bold;
        font-size: 12px;
        letter-spacing: 1.76px;
      }
      span.subtitle{
        font-weight: bold;
        font-size: 15px;
        letter-spacing: 0.5px;
      }
    }
  }
`;

