import React, { useState } from 'react';
import styled from 'styled-components';
import playIcon from 'assets/icons/play.png';
import ModalPlaylist from 'components/ModalPlaylist';

import { IPlaylist } from 'interfaces';

const Playlist: React.FC<IPlaylist> = ({ id, image = "", name, description, color = "" } : IPlaylist) => {
  const [showGreenButton, setShowGreenButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Container
        onMouseOver={() => setShowGreenButton(true)}
        onMouseOut={() => setShowGreenButton(false)}
      >
        <img src={require(`../assets/imgs/${image}`)} alt="Playlist" width="150" />
        <h3>{name.length > 20 ? name.substr(0, 17) + '...' : name}</h3>
        <p>{description.length > 47 ? description.substr(0, 39) + '...' : description}</p>
        <img
          onClick={() => setShowModal(true)}
          style={{ display: showGreenButton ? 'block' : 'none' }}
          src={playIcon}
          alt="Play"
        />
      </Container>
      <ModalPlaylist
        image={image}
        showModal={showModal}
        color={color}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Playlist;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 250px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #262626;
  padding: 20px;
  border-radius: 10px;
  z-index: 10;
  cursor: pointer;
  img {
    margin-bottom: 10px;
  }
  img:last-child {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 10px;
    margin-bottom: 10px;
    z-index: 5;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  h3 {
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 12.8px;
    width: 100%;
    text-align: left;
    font-weight: 700;
  }
  p {
    font-size: 11px;
    line-height: 16px;
    text-align: left;
    color: #a2a2a2;
    margin: 5px 0px 0px 0px;
  }
`;
