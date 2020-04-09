import React from 'react';
import Tick from 'components/Tick';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const MyListItem: React.FC<Props> = ({ children }) => (
  <ListItem>
    <Tick />
    {children}
  </ListItem>
);

const ListItem = styled.li`
  margin-bottom: 10px;
  img {
    margin-right: 15px;
  }
`;

export default MyListItem;
