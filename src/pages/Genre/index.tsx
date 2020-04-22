import React, { useEffect, useState } from 'react';
import Category from 'components/CategoryDashboard';
import { Container } from 'components/Common';
import { useParams } from 'react-router-dom';
import api from 'config/api';
import styled from 'styled-components';
import { ICategory } from 'interfaces';

import { convertHexToRgb, convertHexToRgba } from 'utils';

type Props = {
  handleCurrentPage: () => void;
};

const Genre: React.FC<Props> = ({ handleCurrentPage }: Props) => {
  const { id } = useParams();
  const [backgroundGradientPage, setBackgroundGradientPage] = useState('transparent');
  const [category, setCategory] = useState<ICategory>();

  useEffect(() => {
    api
      .get(`categories/${id}`)
      .then((res: any) => {
        setCategory(res.data);
        setBackgroundGradientPage(res.data.color);
        localStorage.setItem('backgroundHeaderOnScroll', res.data.color);
        handleCurrentPage();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [id]);

  return (
    <ContainerGradient backgroundColor={backgroundGradientPage}>
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
    </ContainerGradient>
  );
};

interface IGradientBox {
  backgroundColor: string;
}

const ContainerGradient = styled(Container)<IGradientBox>`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.backgroundColor},
    #121212 42%
  );
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
