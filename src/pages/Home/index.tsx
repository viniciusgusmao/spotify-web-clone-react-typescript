import React from 'react';
import { Layout } from 'antd';
import Footer from 'components/Footer';

const {
  Header,
  Sider,
  Content,
} = Layout;

export default function Home() {
  return (
    <>
      <Layout>
        <Sider style={{ backgroundColor: '#040404' }}>Sider</Sider>
        <Layout>
          <Header style={{ backgroundColor: '#0B0B0B' }}>Header</Header>
          <Content style={{ backgroundColor: '#121212' }}>Content</Content>
        </Layout>
      </Layout>
      <Footer />
    </>
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
