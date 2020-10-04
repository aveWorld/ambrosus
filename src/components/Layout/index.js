import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main className="page">{children}</main>
    <Footer />
  </div>
);

export default Layout;
