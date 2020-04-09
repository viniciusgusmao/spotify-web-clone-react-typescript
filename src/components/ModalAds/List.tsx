import React from 'react';
import styled from 'styled-components';
import ListItem from 'components/ModalAds/ListItem';

const MyList: React.FC = () => {
  const data: string[] = [
    'Nunca vai precisar de cartão de crédito',
    'Escute podcasts à vontade',
    'Curta suas músicas favoritas com anúncios',
  ];
  return (
    <List>
      {data.map(item => (
        <ListItem>{item}</ListItem>
      ))}
    </List>
  );
};

const List = styled.ul`
  color: white;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  margin-left: 4px;
  margin-bottom: 25px;
  font-size: 16px;
`;

export default MyList;
