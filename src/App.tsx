import * as React from 'react';
import Dashboard from "pages/Dashboard";
import Search from "pages/Search";
import Collection from "pages/Collection";
import { theme } from './theme';
import { ThemeProvider, createGlobalStyle } from './styled-components-cs';
import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Layout } from 'antd';
import Footer from 'components/Footer';
import Menu from 'components/Menu';


const {
  Header,
  Sider,
  Content,
} = Layout;


const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
    background-color: white;
    font-family: 'Circular';
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Layout style={{ height: window.innerHeight, minHeight: 350, overflow: 'hidden', margin: 0, padding: 0 }}>
          <Layout>
            <Sider style={{ backgroundColor: '#040404' }} width={230}>
              <Menu />
            </Sider>
            <Layout style={{ backgroundColor: '#121212' }}>
              <Content>
                <Switch>
                  <Route path="/" exact>
                    <Dashboard />
                  </Route>
                  <Route path="/search">
                    <Search />
                  </Route>
                  <Route path="/collection">
                    <Collection />
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
}
