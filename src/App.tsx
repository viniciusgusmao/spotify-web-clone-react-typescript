import * as React from 'react';
import Index from 'pages';

import { theme } from './theme';
import { ThemeProvider } from './styled-components-cs';
import 'antd/dist/antd.css';

type PropsThemeContext = {
  backgroundColorHeader: string,
  backgroundColorHeaderOnScroll: string,
  setBackgroundColorHeaderOnScroll: (newColor: string) => void,
}
const initialThemeContext = {
  backgroundColorHeader: '#090909',
  backgroundColorHeaderOnScroll: '#121212',
  setBackgroundColorHeaderOnScroll(newColor: string) {
    this.backgroundColorHeaderOnScroll = newColor;
  },
};
export const MyContext = React.createContext<PropsThemeContext>(initialThemeContext);

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <MyContext.Provider value={initialThemeContext}>
      <Index />
    </MyContext.Provider>
  </ThemeProvider>
);

export default App;
