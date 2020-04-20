import React, { useEffect } from 'react';
import Category from 'components/CategoryDashboard';
import { Container } from 'components/Common';
import { useParams } from 'react-router-dom';
import { useCategory } from 'hooks/useCategories';
import styled from 'styled-components';

import { convertHexToRgb, convertHexToRgba } from 'utils';

const Genre: React.FC = () => {
  let { id } = useParams();
  let category_id = Number(id);
  const { category } = useCategory(category_id);
  useEffect(() => {
    localStorage.setItem('backgroundHeader', '#fe4321');
    localStorage.setItem('backgroundHeaderOnScroll', category ? category.color : '#121212');
    localStorage.setItem('backgroundGradientPage', category ? category.color : '#121212');
  }, [category]);

  return (
    <>
      <GradientBox backgroundColor={String(localStorage.getItem('backgroundGradientPage'))} />
      <Container>
        {category && (
          <>
            <GenreTitle>{category.title}</GenreTitle>
            <Category
              key={category.id}
              id={category.id}
              title="Playlists populares"
              description=""
            />
          </>
        )}
      </Container>
    </>
  );
};

interface IGradientBox {
  backgroundColor: string;
}

const GradientBox = styled.div<IGradientBox>`
  width: 81.2%;
  height: 230px;
  background-image: linear-gradient(
    to top,
    ${props => convertHexToRgb(props.backgroundColor)},
    ${props => convertHexToRgba(props.backgroundColor)}
  );
  position: absolute;
`;

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
