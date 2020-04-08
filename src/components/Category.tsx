import React from 'react';
import styled from 'styled-components';

import Playlist from 'components/Playlist';

type CategoryProps = {
  id: number;
  title: string;
  description: string;
  playlists: {
    id: number;
    name: string;
    description: string;
    image: string;
    color: string;
  }[];
};

interface IPlaylist {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

const Category: React.FC<CategoryProps> = ({ id, title, description, playlists }) => (
  <Container>
    <div>
      <a>{title}</a>
      <a href="#">VER TUDO</a>
    </div>
    <p>{description}</p>
    <div>
      {playlists?.map((playlist: IPlaylist) => (
        <Playlist {...playlist} />
      ))}
    </div>
  </Container>
);

export default Category;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 20px;
  div:last-child {
    div {
      float: left;
      margin-right: 15px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  div:first-child {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    a:first-child {
      color: white;
      font-size: 28px;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
    a:last-child {
      color: #b3b3b3;
      letter-spacing: 1.8px;
      font-size: 10.8px;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  p {
    color: #a2a2a2;
  }
`;
