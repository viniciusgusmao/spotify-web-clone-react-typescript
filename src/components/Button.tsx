import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  title: string,
  color?: string,
  backgroundColor?: string;
  fontSize ?: number;
}

// eslint-disable-next-line react/prop-types
const Button : React.FC<ButtonProps> = ({ color = 'black', backgroundColor = 'white', title, fontSize = 14 }) => (
  <ButtonComp
    color={color}
    backgroundColor={backgroundColor}
    fontSize={fontSize}
  >
    {title}
  </ButtonComp>

);

interface IPropsButtonComp {
  color: string,
  backgroundColor: string,
  fontSize : number,
}

const ButtonComp = styled.button<IPropsButtonComp>`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 700;
  letter-spacing: 1.85px;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 500px;
  padding: 8px 45px;
  height: 38px;
  display: flex;
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  transition: transform .1s;
  &:hover{
    transform: scale(1.1)
  }
`;

export default Button;
