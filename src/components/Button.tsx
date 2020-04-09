import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  title: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  handleClick: () => void;
  paddingHorizontal?: number;
  paddingVertical?: number;
  borderColor?: string;
};

// eslint-disable-next-line react/prop-types
const Button: React.FC<ButtonProps> = ({
  color = 'black',
  backgroundColor = 'white',
  title,
  fontSize = 14,
  handleClick,
  paddingHorizontal = 45,
  paddingVertical = 10,
  borderColor = 'transparent',
}) => (
  <ButtonComp
    color={color}
    backgroundColor={backgroundColor}
    fontSize={fontSize}
    paddingHorizontal={paddingHorizontal}
    paddingVertical={paddingVertical}
    onClick={handleClick}
    borderColor={borderColor}
  >
    {title}
  </ButtonComp>
);

interface IPropsButtonComp {
  color: string;
  backgroundColor: string;
  fontSize: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  borderColor?: string;
}

const ButtonComp = styled.button<IPropsButtonComp>`
  font-size: ${props => `${props.fontSize}px`};
  font-weight: 700;
  letter-spacing: 1.85px;
  text-transform: uppercase;
  border: 1px solid ${props => props.borderColor};
  border-radius: 500px;
  padding: ${props => `${props.paddingVertical}px ${props.paddingHorizontal}px`};
  display: flex;
  cursor: pointer;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  transition: transform 0.1s;
  &:hover {
    transform: scale(1.1);
    filter: brightness(110%);
  }
`;

export default Button;
