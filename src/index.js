import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { store } from 'redux/store';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    accent: 'orangered',
    error: 'red',
  },
  radii: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
