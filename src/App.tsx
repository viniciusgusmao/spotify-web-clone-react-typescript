import * as React from 'react';
import Home from "pages/Home";
import { theme } from './theme';
import { ThemeProvider, createGlobalStyle } from './styled-components-cs';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
    background-color: white;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />
      </>
    </ThemeProvider>
  );
}
