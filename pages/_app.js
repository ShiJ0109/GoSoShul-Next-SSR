import App, { Container } from 'next/app';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import withReactRouter from '../next/with-react-router';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import store from 'store/store';

class MyApp extends App {
  render() {
    const { Component, pageProps, originalUrl, data } = this.props;
    return (
      <Container>
        <Component data={data} {...pageProps} originalUrl={originalUrl} />
      </Container>
    );
  }
}

export default withReactRouter(MyApp);
