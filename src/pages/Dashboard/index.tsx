import React from 'react';
import Header from 'components/Header';

import Category from 'components/Category';
import { Container } from 'components/Common';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Category title="Foco" description="Música para ajudar na concentração" />
        <Category title="Foco" description="Música para ajudar na concentração" />
      </Container>
    </>
  );
}
