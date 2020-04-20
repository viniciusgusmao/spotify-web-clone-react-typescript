import React, { useState } from 'react';
import Dashboard from 'pages/Dashboard';
import Search from 'pages/Search';
import Genre from 'pages/Genre';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import MyHeader from 'components/Header';

import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

interface IStylesLayout {
  mainLayout: Object;
  sider: Object;
  header: Object;
  content: Object;
}

const styles: IStylesLayout = {
  mainLayout: {
    height: window.innerHeight,
    minHeight: 350,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  sider: {
    backgroundColor: '#040404',
  },
  header: {
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
    height: 60,
    position: 'fixed',
    zIndex: 999,
    width: '100%',
    paddingRight: 230,
  },
  content: {
    paddingTop: 60,
  },
};

const Index: React.FC = () => {
  let bgHeader = String(localStorage.getItem('backgroundHeader'));
  const [backgroundColor, setBackgroundColor] = useState(bgHeader);
  const [opacity, setOpacity] = useState(0.6);

  const changeBackgroundColorOnScroll = (e: any) => {
    const { scrollTop } = e.target;
    let bgHeader = String(localStorage.getItem('backgroundHeader'));
    let bgHeaderOnScroll = String(localStorage.getItem('backgroundHeaderOnScroll'));
    if (scrollTop > 145) {
      setBackgroundColor(bgHeaderOnScroll);
      setOpacity(1);
    } else {
      setBackgroundColor(bgHeader);
      setOpacity(0.6);
    }
  };

  return (
    <Router>
      <Layout style={styles.mainLayout}>
        <Layout>
          <Sider style={styles.sider} width={230}>
            <Menu />
          </Sider>
          <ContentLayout onScroll={changeBackgroundColorOnScroll}>
            <Header style={styles.header}>
              <div
                style={{
                  backgroundColor,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: 60,
                  zIndex: -2,
                  width: '100%',
                  opacity,
                  transition: 'background-color 0.5s',
                }}
              />
              <MyHeader />
            </Header>
            <Content style={styles.content}>
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/search">
                  <Search />
                </Route>
                <Route path="/genre/:id">
                  <Genre />
                </Route>
              </Switch>
            </Content>
          </ContentLayout>
        </Layout>
        <Footer />
      </Layout>
    </Router>
  );
};

const ContentLayout = styled(Layout)`
  background-color: #121212;
`;

export default Index;
