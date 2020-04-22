import React from 'react';
import styled from 'styled-components';
import { MdPlayCircleOutline } from 'react-icons/md';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { TiArrowShuffle } from 'react-icons/ti';
import { IoIosRepeat, IoIosPlayCircle, IoIosSkipBackward, IoIosSkipForward } from 'react-icons/io';

const AudioControl: React.FC = () => (
  <Container>
    <div>
      <TiArrowShuffle size={20} color="#b3b3b3" />
      <IoIosSkipBackward size={15} color="#b3b3b3" />
      <MdPlayCircleOutline size={40} color="#b3b3b3" />
      <IoIosSkipForward size={15} color="#b3b3b3" />
      <IoIosRepeat size={20} color="#b3b3b3" />
    </div>
    <div>
      <span>00:00</span>
      <div></div>
      <span>00:00</span>
    </div>
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  padding: 0 16px;
  background-color: #282828;
  width: 100%;
  div:first-child {
    display: flex;
    align-items: center;
    svg {
      margin-left: 30px;
    }
  }
  div:last-child {
    margin-top: 10px;
    display: flex;
    align-items: center;
    span {
      color: #b3b3b3;
      font-size: 12px;
    }
    div {
      width: 400px;
      margin: 0 10px;
      background-color: #535353;
      height: 4px;
      border-radius: 20px;
    }
  }
`;

export default AudioControl;
