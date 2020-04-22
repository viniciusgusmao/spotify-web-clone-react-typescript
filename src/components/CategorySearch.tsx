import React from 'react';
import styled from 'styled-components';

import { IGenericItem } from 'interfaces';

const CategorySearch: React.FC<IGenericItem> = ({
  title,
  image = '',
  color = '',
}: IGenericItem) => (
  <Container backgroundColor={color} image={image}>
    <img src={`https://t.scdn.co/images/${image}`} alt={title} />
    <p>{title}</p>
  </Container>
);

interface IContainer {
  backgroundColor: string;
  image: string;
}

const Container = styled.div<IContainer>`
  display: flex;
  position: relative;
  flex-direction: row;
  margin-bottom: 20px;
  width: 172px;
  height: 172px;
  margin-right: 18px;
  border-radius: 8px;
  background: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.4));
  background-color: ${(props) => props.backgroundColor};
  img {
    transform: rotate(25deg) translate(18%, -2%);
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    clip-path: polygon(63% 0, 96% 70%, 94% 78%, 65% 92%, 0 92%, 0 0);
  }
  p {
    color: #fff;
    font-size: 24px;
    padding: 16px;
    font-weight: bold;
    z-index: 2;
  }
`;

export default CategorySearch;
