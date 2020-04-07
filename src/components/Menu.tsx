import React, { useState } from 'react';
import styled from 'styled-components';
import logo from 'assets/imgs/logo.png';
import homeIcon from 'assets/icons/home.png';
import homeIconFill from 'assets/icons/home_fill.png';
import searchIcon from 'assets/icons/search.png';
import searchIconFill from 'assets/icons/search_fill.png';

import { NavLink } from 'react-router-dom';

export default function Menu() {
  const [homeIcon, setHomeIcon] = useState('home_fill');
  const [searchIcon, setSearchIcon] = useState('search');
  return (
    <BoxMenu>
      <div className="boxMenuContent">
        <img src={logo} className="logo" alt="Logo Spotify" />
        <div className="menu">
          <NavLink
            activeClassName="active"
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              setHomeIcon('home_fill');
              setSearchIcon('search');
              return true;
            }}
            to="/"
            exact
          >
            <img src={require(`assets/icons/${homeIcon}.png`)} />
            <span>Início</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              setHomeIcon('home');
              setSearchIcon('search_fill');
              return true;
            }}
            to="/search"
          >
            <img src={require(`assets/icons/${searchIcon}.png`)} />
            <span>Buscar</span>
          </NavLink>
          <NavLink activeClassName="active" to="/collection">
            <img src={require('assets/icons/library.png')} />
            <span>Sua Biblioteca</span>
          </NavLink>
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
  div.boxMenuRodape {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    a,
    span {
      color: #b3b3b3;
      font-size: 12px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  div.boxMenuContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    img.logo {
      width: 58%;
      margin-top: 20px;
      margin-left: 20px;
      margin-bottom: 14px;
    }
    div {
      display: flex;
      flex-direction: column;
      margin: 9px;
      a {
        display: flex;
        color: #b3b3b3;
        padding: 8px;
        font-size: 14px;
        font-weight: bold;
        transition: color 0.2s;
        margin-bottom: 5px;
        &:hover {
          color: #ffffff;
        }
        img {
          margin-left: 12px;
          margin-right: 15px;
        }
      }
      a.active {
        background-color: #282828;
        color: #ffffff;
        border-radius: 2px;
      }
    }
  }
`;
