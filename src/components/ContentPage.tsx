import React from 'react';
import styled from 'styled-components';

import Category from 'components/Category';

export default function ContentPage() {
  return (
    <Container>
      <Category title="Foco" description="Música para ajudar na concentração" />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 30px 20px 30px;
`;
