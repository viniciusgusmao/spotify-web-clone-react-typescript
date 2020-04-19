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

import { MyContext } from '../App';

const { Header, Sider, Content } = Layout;

interface IStylesLayout {
  mainLayout: Object;
  sider: Object;
  header: Object;
  content: Object;
  contentLayout: Object;
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
  contentLayout: {
    backgroundColor: '#121212',
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
  const theme = React.useContext(MyContext);
  const [backgroundColor, setBackgroundColor] = useState(theme.backgroundColorHeader);
  const [opacity, setOpacity] = useState(0.6);
  const changeBackgroundColorOnScroll = (e: any) => {
    const { scrollTop } = e.target;
    if (scrollTop > 145) {
      setBackgroundColor(theme.backgroundColorHeaderOnScroll);
      setOpacity(1);
    } else {
      setBackgroundColor(theme.backgroundColorHeader);
      setOpacity(0.6);
    }
  };
  return (
    <Router>
      <Layout style={styles.mainLayout} onScroll={changeBackgroundColorOnScroll}>
        <Layout>
          <Sider style={styles.sider} width={230}>
            <Menu />
          </Sider>
          <Layout style={styles.contentLayout}>
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
                  transition: 'background-color 1s',
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
          </Layout>
        </Layout>
        <Footer />
      </Layout>
    </Router>
  );
};

export default Index;
