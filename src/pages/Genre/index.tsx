import React, { useEffect, useState } from 'react';
import Category from 'components/CategoryDashboard';
import { Container } from 'components/Common';
import { useParams } from 'react-router-dom';
import api from 'config/api';
import styled from 'styled-components';
import { ICategory } from 'interfaces';

import { convertHexToRgb, convertHexToRgba } from 'utils';

const Genre: React.FC = () => {
  let { id } = useParams();
  const [backgroundGradientPage, setBackgroundGradientPage] = useState('transparent');
  const [category, setCategory] = useState<ICategory>();

  useEffect(() => {
    api
      .get(`categories/${id}`)
      .then((res: any) => {
        setCategory(res.data);
        setBackgroundGradientPage(res.data.color);
        localStorage.setItem('backgroundHeader', '#080808');
        localStorage.setItem('backgroundHeaderOnScroll', res.data.color);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <GradientBox backgroundColor={backgroundGradientPage} />
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
