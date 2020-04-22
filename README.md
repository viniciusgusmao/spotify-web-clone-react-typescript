# Spotify Web Clone
> This project is an attempt to reproduce some features of [Spotify Web](https://open.spotify.com/ "Spotify Web"), using React with Typescript as it main language/framework.

## Overview and Goals

Spotify is the audio streaming service that I use most in my daily life, whether in the car, doing physical activity or in front of my computer. In order to put the front end development technologies into practice, I decided to clone some features of the spotify web application and my experience was quite **challenging and productive**.

***The intention of this project is for study purposes only.***

## Technologies
- React with Typescript
- Ant Design
- Axios
- Styled Components
- Json-Server
- Eslint
- Prettier

## Screenshots

## Installation
I had to mock the data of categories and playlists because performing the integration with the official Spotify API was not the goal of this project. So, I used the **json-server** package to do this job.

**1. npm install**

**2.  Install json-server**
npm install -g json-server

**3. Start the fake API**
json-server --watch database/db.json

**4.  npm start**

Access in http://localhost:3000/

## Roadmap

I tried to make only the functionalities of the area that does not have authentication. Here are some features that still need to be done:
- Details page on click in some playlist
- Effects on the footer audio buttons
- Do input search works
