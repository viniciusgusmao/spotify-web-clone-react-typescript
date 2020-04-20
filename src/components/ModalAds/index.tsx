import React from 'react';
import '../ModalPlaylist/style.css';
import { Modal } from 'antd';
import Button from 'components/Button';
import styled from 'styled-components';
import List from 'components/ModalAds/List';

interface IModalAds {
  showModal: boolean;
  handleClose: () => void;
}

const ModalAds: React.FC<IModalAds> = ({ showModal, handleClose }) => {
  if (!showModal) return null;

  return (
    <Modal
      visible={showModal}
      width={820}
      centered={true}
      bodyStyle={{
        backgroundImage: 'url("https://open.scdn.co/cdn/images/improved-modal-bg.23e5dcb1.jpg")',
      }}
      onCancel={handleClose}
      footer={null}
    >
      <Container>
        <div>
          <h1>Aproveite o Spotify ao máximo com uma conta gratuita</h1>
          <List />
          <a href="javascript:;" onClick={handleClose}>
            FECHAR
          </a>
        </div>
        <div>
          <Button
            color="#fff"
            handleClick={() => {}}
            backgroundColor="#5CBA55"
            title="Inscreva-se grátis"
            fontSize={16}
            paddingHorizontal={20}
            paddingVertical={18}
          />
          <hr />
          <span>Já tem um conta?</span>
          <Button
            color="#000"
            handleClick={() => {}}
            backgroundColor="#fff"
            title="Entrar"
            fontSize={16}
            paddingHorizontal={85}
            paddingVertical={18}
            borderColor="black"
          />
        </div>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  div:nth-child(1) {
    h1 {
      text-align: left;
      color: #fff;
      display: block;
      width: 300px;
      font-size: 45px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      line-height: 48px;
    }
    a {
      color: white;
      font-size: 12px;
      text-transform: uppercase;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  div:nth-child(2) {
    height: 50%;
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.3), 0 24px 16px -5px rgba(0, 0, 0, 0.17);
    background-color: white;
    padding: 32px;
    border-radius: 8px;
    hr {
      margin: 32px 8px 25px;
      background-color: #b3b3b3;
    }
    span {
      color: black;
      display: block;
      text-align: center;
      margin-bottom: 15px;
    }
  }
`;

export default ModalAds;
