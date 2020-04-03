import React from 'react';
import styled from 'styled-components';
import logo from 'assets/imgs/logo.png';
import homeIcon from 'assets/icons/home.png';
import homeIconFill from 'assets/icons/home_fill.png';
import searchIcon from 'assets/icons/search.png';
import searchIconFill from 'assets/icons/search_fill.png';
import libraryIcon from 'assets/icons/library.png';

import {
  Link
} from "react-router-dom";

export default function Menu() {
  return (
    <BoxMenu>
      <div className="boxMenuContent">
        <img src={logo} className="logo" alt="Logo Spotify" />
        <div className="menu">
          <Link className="active" to="/">
            <img src={homeIconFill} width="20" height="20" />
            <span>Início</span>
          </Link>
          <Link to="/search">
            <img src={searchIcon} />
            <span>Buscar</span>
          </Link>
          <Link to="/collection">
            <img src={libraryIcon} />
            <span>Sua Biblioteca</span>
          </Link>
        </div>
      </div>
      <div className="boxMenuRodape">
        <a href="#">Cookies</a>
        <span>-</span>
        <a href="#">Privacidade</a>
      </div>
    </BoxMenu>
  );
}

const BoxMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  div.boxMenuRodape{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    a, span {
      color: #B3B3B3;
      font-size: 12px;
    }
    a:hover{
      text-decoration: underline;
    }
  }
  div.boxMenuContent{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    img.logo{
      width: 58%;
      margin-top: 20px;
      margin-left: 20px;
      margin-bottom: 14px;
    }
    div{
      display: flex;
      flex-direction: column;
      margin: 9px;
      a {
        display: flex;
        color: #B3B3B3;
        padding: 8px;
        font-size: 14px;
        font-weight: bold;
        transition: color 0.2s;
        margin-bottom: 5px;
        &:hover{
          color: #FFFFFF;
        }
        img{
          margin-left: 12px;
          margin-right: 15px;
        }
      }
      a.active{
          background-color: #282828;
          color: #FFFFFF;
          border-radius: 2px;
        }
    }
  }
`;
