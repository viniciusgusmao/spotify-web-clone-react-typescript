import React, { useEffect } from 'react';
import Category from 'components/CategorySearch';
import { Container } from 'components/Common';
import { IGenericItem } from 'interfaces';
import { Link } from 'react-router-dom';

import { useCategories } from 'hooks/useCategories';
import styled from 'styled-components';

type Props = {
  handleCurrentPage: () => void;
  changeBackgroundHeader: (color: string) => void
};

const Search: React.FC<Props> = ({ handleCurrentPage, changeBackgroundHeader }: Props) => {
  const { categories } = useCategories();
  useEffect(() => {
    localStorage.setItem('backgroundHeader', '#080808');
    localStorage.setItem('backgroundHeaderOnScroll', '#080808');
    handleCurrentPage();
    changeBackgroundHeader('#080808');
  }, []);
  return (
    <ContainerSearch>
      <h1>Navegar por todas as seções</h1>
      <div>
        {categories?.map((category: IGenericItem) => (
          <Link to={`genre/${category.id}`}>
            <Category
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              color={category.color}
              image={category.image}
            />
          </Link>
        ))}
      </div>
    </ContainerSearch>
  );
};

const ContainerSearch = styled(Container)`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 25;
    padding: 0;
    color: white;
    font-size: 28px;
    font-weight: bold;
  }
`;

export default Search;
