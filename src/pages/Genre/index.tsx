import React, { useEffect, useState } from 'react';
import Category from 'components/CategoryDashboard';
import { Container } from 'components/Common';
import { useParams } from 'react-router-dom';
import { useCategory } from 'hooks/useCategories';
import styled from 'styled-components';

const Genre: React.FC = () => {
  let { id } = useParams();
  let category_id = Number(id);
  const { category } = useCategory(category_id);
  return (
    <Container>
      {category && (
        <>
          <GenreTitle>{category.title}</GenreTitle>
          <Category key={category.id} id={category.id} title="Playlists populares" description="" />
        </>
      )}
    </Container>
  );
};

const GenreTitle = styled.h1`
  font-size: 72px;
  line-height: 82px;
  letter-spacing: -0.005em;
  font-weight: bold;
  text-transform: none;
  color: #fff;
  padding: 100px 0 0;
  text-align: left;
`;

export default Genre;
