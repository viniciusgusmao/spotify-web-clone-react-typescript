import * as React from 'react';
import Dashboard from 'pages/Dashboard';
import Search from 'pages/Search';
import { theme } from './theme';
import { ThemeProvider } from './styled-components-cs';
import 'antd/dist/antd.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import MyHeader from 'components/Header';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout
          style={{
            height: window.innerHeight,
            minHeight: 350,
            overflow: 'hidden',
            margin: 0,
            padding: 0,
          }}
        >
          <Layout>
            <Sider style={{ backgroundColor: '#040404' }} width={230}>
              <Menu />
            </Sider>
            <Layout style={{ backgroundColor: '#121212' }}>
              <Header
                style={{
                  margin: 0,
                  padding: 0,
                  backgroundColor: 'transparent',
                  height: 60,
                  position: 'fixed',
                  zIndex: 999,
                  width: '100%',
                  paddingRight: 230,
                }}
              >
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
              <Content style={{ paddingTop: 60 }}>
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
    </ThemeProvider>
  );
};

export default App;
