import React from 'react';
import { Layout } from 'antd';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

const {
  Header,
  Sider,
  Content,
} = Layout;

export default function Home() {
  return (
    <Layout style={{ height: window.innerHeight, minHeight: 350, overflow: 'hidden', margin: 0, padding: 0 }}>
      <Layout>
        <Sider style={{ backgroundColor: '#040404' }} width={230} >
          <Menu />
        </Sider>
        <Layout>
          <Header style={{ backgroundColor: '#0B0B0B' }}>Header</Header>
          <Content style={{ backgroundColor: '#121212' }}>Content</Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
}

// const Container = styled.div`
//   display: flex;
//   flex: 1;
// `;

// const Header = styled.header`
//   width: 100%;
//   border-bottom: 2px solid #E4E9EB;
//   overflow: hidden;
// `;

// interface IPropsWrapper {
//   flexDirection?: string,
//   justifyContent ?: string
// }

// const Wrapper = styled.div<IPropsWrapper>`
//   display: flex;
//   flex-direction: ${(props) => props.flexDirection || 'column'};
//   width: 1200px;
//   margin: 0 auto;
//   justify-content: ${(props) => props.justifyContent || 'center'};
//   background-color: green;
// `;

// interface IPropsBoxHeader {
//   alignContent ?: string
// }

// const BoxHeader = styled.div<IPropsBoxHeader>`
//   display: flex;
//   flex-direction: row;
// `;
