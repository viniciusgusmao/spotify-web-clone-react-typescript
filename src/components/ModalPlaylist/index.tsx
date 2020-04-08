import React from 'react';
import './style.css';
import { Modal } from 'antd';
import Button from 'components/Button';
import styled from 'styled-components';

interface IModalPlaylist {
  showModal: boolean;
  color: string;
  image: string;
  handleClose: () => void;
}

const ModalPlaylist: React.FC<IModalPlaylist> = ({ showModal, color, image, handleClose }) => {
  if (!showModal) return null;

  return (
    <Modal
      visible={showModal}
      width={820}
      centered={true}
      bodyStyle={{
        backgroundImage: `linear-gradient(to bottom, ${color},#272828)`,
      }}
      onCancel={handleClose}
      footer={[
        <Button
          handleClick={handleClose}
          color="white"
          backgroundColor="transparent"
          title="Fechar"
          fontSize={10}
        />,
      ]}
    >
      <Container>
        <img src={require(`../../assets/imgs/${image}`)} alt="Capa da playlist" />
        <div>
          <p>Escute com uma conta gratuita do spotify</p>
          <Button
            handleClick={() => {}}
            color="white"
            backgroundColor="#6DD962"
            title="Inscreva-se grátis"
            fontSize={12}
          />
          <div>
            <span>Já tem uma conta ?</span>
            <Button
              handleClick={() => {}}
              color="white"
              backgroundColor="transparent"
              title="Entrar"
              fontSize={10}
              paddingHorizontal={20}
            />
          </div>
        </div>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  img {
    border-radius: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    p {
      text-align: center;
      color: #fff;
      display: block;
      width: 300px;
      font-size: 30px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      line-height: 32px;
      margin-bottom: 20px;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
      span {
        color: white;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
`;

export default ModalPlaylist;
