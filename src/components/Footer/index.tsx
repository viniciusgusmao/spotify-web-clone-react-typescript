import React from 'react';
import { Layout } from 'antd';
import InscrevaseBox from 'components/Footer/InscrevaseBox';
import AudioControl from 'components/Footer/AudioControl';

const { Footer } = Layout;

// eslint-disable-next-line no-underscore-dangle
const MyFooter: React.FC = () => {
  return (
    <Footer
      style={{
        padding: 0,
        margin: 0,
        overflow: 'hidden',
        height: 185,
      }}
    >
      <InscrevaseBox />
      <AudioControl />
    </Footer>
  );
};

export default MyFooter;
