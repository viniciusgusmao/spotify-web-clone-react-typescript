import React from 'react';
import styled from 'styled-components';

import Artist from 'components/Artist';

type CategoryProps = {
  title: string,
  description: string
}

const Category: React.FC<CategoryProps> = ({ title, description }) => (
  <Container>
    <div>
      <a>{title}</a>
      <a href="#">VER TUDO</a>
    </div>
    <p>{description}</p>
    <div>
      <Artist image="teste" title="Concentração perfeita" description="Concentração no máximo, sem distrações." />
      <Artist image="teste" title="Concentração perfeita" description="Concentração no máximo, sem distrações." />
      <Artist image="teste" title="Concentração perfeita" description="Concentração no máximo, sem distrações." />
    </div>
  </Container>
);

export default Category;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  div:last-child{
    div {
      float: left;
      margin-right: 15px;
    }
  }
  div:first-child{
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    a:first-child{
      padding: 0;
      margin: 0;
      color: white;
      font-size: 28px;
      font-weight: bold;
      &:hover{
        text-decoration: underline;
      }
    }
    a:last-child{
      color: #B3B3B3;
      letter-spacing: 1.8px;
      font-size: 10.8px;
      font-weight: bold;
    }
  }
  p{
    color: #A2A2A2;
  }
`;
