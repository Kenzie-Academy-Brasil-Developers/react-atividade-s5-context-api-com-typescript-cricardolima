import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Providers } from './Providers';
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
