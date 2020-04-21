import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from 'assets/imgs/logo.png';
import ModalAds from 'components/ModalAds';

import { NavLink } from 'react-router-dom';

type Props = {
  currentPage: string;
};

const Menu: React.FC<Props> = ({ currentPage }) => {
  const [homeIcon, setHomeIcon] = useState('home_fill');
  const [searchIcon, setSearchIcon] = useState('search');
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    console.log(currentPage);
    switch (currentPage) {
      case '/':
        setHomeIcon('home_fill');
        setSearchIcon('search');
        break;
      case 'search':
      case 'genre':
        setHomeIcon('home');
        setSearchIcon('search_fill');
        break;
      default:
        break;
    }
  }, [currentPage]);
  return (
    <BoxMenu>
      <div className="boxMenuContent">
        <img src={logo} className="logo" alt="Logo Spotify" />
        <div className="menu">
          <NavLink className={currentPage == '/' ? 'active' : ''} to="/" exact>
            <img src={require(`assets/icons/${homeIcon}.png`)} alt="iconHome" />
            <span>Início</span>
          </NavLink>
          <NavLink
            className={currentPage == 'genre' || currentPage == 'search' ? 'active' : ''}
            to="/search"
          >
            <img src={require(`assets/icons/${searchIcon}.png`)} alt="iconSearch" />
            <span>Buscar</span>
          </NavLink>
          <a href="#" onClick={() => setShowModal(true)}>
            <img src={require('assets/icons/library.png')} alt="iconSearch" />
            <span>Sua Biblioteca</span>
          </a>
        </div>
      </div>
      <ModalAds showModal={showModal} handleClose={() => setShowModal(false)} />
      <div className="boxMenuRodape">
        <a href="#">Cookies</a>
        <span>-</span>
        <a href="#">Privacidade</a>
      </div>
    </BoxMenu>
  );
};

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
        span {
          margin-top: 4px;
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

export default Menu;
