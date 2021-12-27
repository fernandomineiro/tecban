import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';

import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Tecban - Open Finance" />
      <meta name="author" content="Tecban - Tecban.com.br" />
      <meta name="keyword" content="Open Finance,Tecban,API,Brazil,Pagamentos,Pix,Bacen,Digital,Bank,digital Banking,open finance,neobank,banks,bancos,febraban,banco central,openbanking" />
      <link rel="icon" type="image/png" href="https://tecban.app/logo-colorido.png"/>
      <link rel="shortcut icon" type="image/ico" href="https://tecban.app/favicon.ico"/>
      <title>Tecban Open Finance</title>
    </Head>
    <main id="app" className="d-flex flex-column h-100" data-testid="layout">
      <NavBar />
      <Container className="flex-grow-1 mt-5">{children}</Container>
      <Footer />
    </main>
  </>
);

export default Layout;
