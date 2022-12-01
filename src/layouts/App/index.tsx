import React from 'react';

import { Header } from 'components/Header';

import { Footer } from 'components/Footer';

export function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
