import React from 'react';
import styled from 'styled-components';
import logo from 'assets/imgs/logo.png';
import { MdHome MdSearch, MdLibraryAdd } from 'react-icons/md';

export default function Menu() {
  return (
    <BoxMenu>
      <div className="boxMenuContent">
        <img src={logo} alt="Logo Spotify" />
        <div>
          <a className="active" href="#">
            <MdHome size={24} color="white" />
            Início
          </a>
          <a href="#">
            <MdSearch size={24} color="white" />
            Buscar
          </a>
          <a href="#">
            <MdLibraryAdd size={24} color="white" />
            Sua Biblioteca
          </a>
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
    img{
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
        svg{
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
