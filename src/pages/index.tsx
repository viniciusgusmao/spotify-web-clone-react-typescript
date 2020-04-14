import React from 'react';
import Dashboard from 'pages/Dashboard';
import Search from 'pages/Search';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import MyHeader from 'components/Header';

import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

type PropsThemeContext = {
  backgroundColorHeader: string
}
const initialThemeContext = {
  backgroundColorHeader: '#0b0b0b',
};
export const MyContext = React.createContext<PropsThemeContext>(initialThemeContext);

interface IStylesLayout {
  mainLayout: Object,
  sider: Object,
  header: Object,
  content: Object,
  contentLayout: Object,
}

const styles:IStylesLayout = {
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
  const changeBackgroundColorOnScroll = (e: any) => {
    const { scrollTop } = e.target;
    // if (scrollTop > 145) {

    // } else {

    // }
  };
  return (
    <MyContext.Provider value={initialThemeContext}>
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
                    backgroundColor: '#0b0b0b',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 60,
                    zIndex: -2,
                    width: '100%',
                    opacity: 0.6,
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
                </Switch>
              </Content>
            </Layout>
          </Layout>
          <Footer />
        </Layout>
      </Router>
    </MyContext.Provider>
  );
};

export default Index;
