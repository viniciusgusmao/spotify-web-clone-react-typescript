import * as React from 'react';
import { theme } from './theme';
import { ThemeProvider, createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
  }
`;

export default function App() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <h1>Testando</h1>
        </>
      </ThemeProvider>
    );
}
