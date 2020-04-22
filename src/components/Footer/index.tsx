import React from 'react';
import { Layout } from 'antd';
import InscrevaseBox from 'components/Footer/InscrevaseBox';
import AudioControl from 'components/Footer/AudioControl';

const { Footer } = Layout;


const MyFooter: React.FC = () => (
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


export default MyFooter;
