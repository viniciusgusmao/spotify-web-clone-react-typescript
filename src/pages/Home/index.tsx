import React from 'react';
import { Layout } from 'antd';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import HeaderPage from 'components/HeaderPage';
import ContentPage from 'components/ContentPage';

const {
  Header,
  Sider,
  Content,
} = Layout;

export default function Home() {
  return (
    <Layout style={{ height: window.innerHeight, minHeight: 350, overflow: 'hidden', margin: 0, padding: 0 }}>
      <Layout>
        <Sider style={{ backgroundColor: '#040404' }} width={230}>
          <Menu />
        </Sider>
        <Layout style={{ backgroundColor: '#121212' }}>
          <Content>
            <HeaderPage />
            <ContentPage />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
}
