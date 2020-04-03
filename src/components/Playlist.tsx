import React from 'react';
import imgPlaylist from 'assets/imgs/example_artist.png';
import styled from 'styled-components';

type PlaylistProps = {
  image: string,
  name: string,
  description: string,
}

const Playlist: React.FC<PlaylistProps> = ({ image, name, description }) => (
  <Container>
    <img src={require(`../assets/imgs/${image}`)} alt="Playlista" width="150" />
    <h3>{name.length > 20 ? name.substr(0,17)+'...' : name}</h3>
    <p>{description.length > 47 ? description.substr(0,39)+'...' : description}</p>
  </Container>
);


export default Playlist;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 250px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #262626;
  padding: 20px;
  border-radius: 10px;
  img{
    margin-bottom: 10px;
  }
  h3{
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 12.8px;
    letter-spacing: 0.2px;
    width: 100%;
    text-align: left;
    font-weight: bold;
  }
  p{
    font-size: 11px;
    line-height: 16px;
    text-align: left;
    color: #A2A2A2;
    margin: 5px 0px 0px 0px;
  }
`;
