import React from 'react';
import styled from 'styled-components';

const defaultProps = {
  backgroundColor: 'white',
  color: 'black',
};

type ButtonProps = {
  title: string,
  color?: string,
  backgroundColor?: string;
} & typeof defaultProps;

// eslint-disable-next-line react/prop-types
const Button : React.FC<ButtonProps> = ({ color, backgroundColor, title }) => (
  <ButtonComp
    color={color}
    backgroundColor={backgroundColor}
    type="button"
  >
    {title}
  </ButtonComp>

);

interface IPropsButtonComp {
  color: string,
  backgroundColor: string,
}

const ButtonComp = styled.button<IPropsButtonComp>`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.76px;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 500px;
  padding: 0px 50px;
  height: 42px;
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  transition: height 0.1s, padding 0.1s, font-size 0.1s;

  &:hover{
    height: 50px;
    padding: 0px 60px;
    font-size: 15px;
  }

`;

export default Button;
