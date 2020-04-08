import React from 'react';
import '../ModalPlaylist/style.css';
import { Modal } from 'antd';
import Button from 'components/Button';
import styled from 'styled-components';

interface IModalAds {
  showModal: boolean;
  handleClose: () => void;
}

const ModalPlaylist: React.FC<IModalAds> = ({ showModal, handleClose }) => {
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
      <Container></Container>
    </Modal>
  );
};

const Container = styled.div``;

export default ModalPlaylist;
