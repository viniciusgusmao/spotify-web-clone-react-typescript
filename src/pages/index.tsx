import React, { useState } from 'react';
import Dashboard from 'pages/Dashboard';
import Search from 'pages/Search';
import Genre from 'pages/Genre';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import MyHeader from 'components/Header';

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
  contentLayout: {
    backgroundColor: '#121212',
  },
};

const Index: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState(String(localStorage.getItem('backgroundHeader')));
  const [currentPage, setCurrentPage] = useState('');
  const [opacity, setOpacity] = useState(0.5);

  const changeBackgroundColorOnScroll = (e: any) => {
    const { scrollTop } = e.target;
    const bgHeader = String(localStorage.getItem('backgroundHeader'));
    const bgHeaderOnScroll = String(localStorage.getItem('backgroundHeaderOnScroll'));
    if (scrollTop > 145) {
      setBackgroundColor(bgHeaderOnScroll);
      setOpacity(1);
    } else {
      setBackgroundColor(bgHeader);
      setOpacity(0.5);
    }
  };

  const changeBackgroundHeader = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <Router>
      <Layout style={styles.mainLayout}>
        <Layout>
          <Sider style={styles.sider} width={230}>
            <Menu currentPage={currentPage} />
          </Sider>
          <Layout style={styles.contentLayout} onScroll={changeBackgroundColorOnScroll}>
            <Header style={styles.header}>
              <MyHeader currentPage={currentPage} backgroundColor={backgroundColor} opacity={opacity} />
            </Header>
            <Content style={styles.content}>
              <Switch>
                <Route path="/" exact>
                  <Dashboard
                    handleCurrentPage={() => setCurrentPage('/')}
                    changeBackgroundHeader={(color: string) => changeBackgroundHeader(color)}
                  />
                </Route>
                <Route path="/search">
                  <Search
                    handleCurrentPage={() => setCurrentPage('search')}
                    changeBackgroundHeader={(color: string) => changeBackgroundHeader(color)}
                  />
                </Route>
                <Route path="/genre/:id">
                  <Genre
                    handleCurrentPage={() => setCurrentPage('genre')}
                    changeBackgroundHeader={(color: string) => changeBackgroundHeader(color)}
                  />
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
