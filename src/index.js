import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './pages/Home';
import styled from 'styled-components';
import Header from './components/Header';
import Strip from './assets/strip.svg';
import StyledGlobalStyle from './utils/style/GlobalStyle';

const AppContainer = styled.div`
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    156deg,
    #f8c7c8 18.54%,
    #fac1c2 24.61%,
    #feb6b8 42.81%,
    #ffb2b4 61.01%,
    #dc939c 105.21%
  );
  height: 100vh;
  z-index: 0;

  @media (max-width: 768px) {
    overflow: auto;
  }
`;

const BackgroundSVG = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledGlobalStyle />
    <AppContainer>
      <BackgroundSVG src={Strip} alt="background svg" />
      <Header />
      <Home />
    </AppContainer>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
