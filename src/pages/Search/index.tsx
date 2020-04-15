import React, { useEffect, useState } from 'react';
import Category from 'components/CategorySearch';
import { Container } from 'components/Common';
import { ICategory } from 'interfaces';

import useCategories from 'hooks/useCategories';
import styled from 'styled-components';

const Search: React.FC = () => {
  const { categories } = useCategories();
  return (
    <ContainerSearch>
    <h1>Navegar por todas as seções</h1>
    <div>
      {categories?.map((category: ICategory) => (
        <Category
          key={category.id}
          id={category.id}
          title={category.title}
          description={category.description}
          color={category.color}
          image={category.image}
        />
      ))}
      </div>
    </ContainerSearch>
  );
};

const ContainerSearch = styled(Container)`
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    flex-direction: row;
  }
  h1{
    margin-top: 0;
    margin-bottom: 25;
    padding: 0;
    color: white;
    font-size: 28px;
    font-weight: bold;
  }
`;

export default Search;
