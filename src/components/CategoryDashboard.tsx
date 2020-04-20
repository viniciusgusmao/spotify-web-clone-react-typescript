import React from 'react';
import styled from 'styled-components';

import Playlist from 'components/Playlist';
import { IPlaylist, ICategory } from 'interfaces';
import usePlaylists from 'hooks/usePlaylists';

const Category: React.FC<ICategory> = ({ id, title, description }: ICategory) => {
  const { playlists } = usePlaylists(id);
  return (
    <Container>
      <div>
        <a href="#">{title}</a>
        <a href="#">VER TUDO</a>
      </div>
      {description != '' && <p>{description}</p>}
      <div>
        {playlists?.map((playlist: IPlaylist) => (
          <Playlist
            key={playlist.id}
            id={playlist.id}
            image={playlist.image}
            name={playlist.name}
            description={playlist.description}
            color={playlist.color}
          />
        ))}
      </div>
    </Container>
  );
};

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
    margin-bottom: 18px;
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
