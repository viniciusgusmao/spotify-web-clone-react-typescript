import * as React from 'react';
import Index from 'pages';

import { theme } from './theme';
import { ThemeProvider } from './styled-components-cs';
import 'antd/dist/antd.css';



const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Index />
  </ThemeProvider>
);

export default App;
