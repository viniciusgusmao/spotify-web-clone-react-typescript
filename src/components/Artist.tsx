import React from 'react';
import imgArtist from 'assets/imgs/example_artist.png';
import styled from 'styled-components';

type ArtistProps = {
  image: string,
  title: string,
  description: string,
}

const Artist: React.FC<ArtistProps> = ({ image, title, description }) => (
  <Container>
    <img src={imgArtist} alt="artista" />
    <h3>{title}</h3>
    <p>{description}</p>
  </Container>
);


export default Artist;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
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
    font-size: 12px;
    letter-spacing: 1.2px;
    text-align: justify;
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
