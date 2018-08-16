import React from 'react';
import Styled from 'styled-components';
import Title from '../Titles';

const SquareItem = Styled.div`
  display: inline-block;
  width: calc(33% - 10px);
  height: 14vh;
  border: 5px solid #fff;
  background-color: #ddd;
	cursor: pointer;
`;

const ItemBox = Styled.div`
	display: flex;
	height: 100%;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const getFirstLetter = user => {
  let secretName = '';
  user.split(' ').map(name => {
    return (secretName += name[0]);
  });
  return secretName;
};

const Square = props => {
  return (
    <SquareItem>
      <ItemBox>
        <Title size="36px">{getFirstLetter(props.name)}</Title>
        <Title size="18px">R$: {props.total}</Title>
        <Title size="14px">{props.name}</Title>
      </ItemBox>
    </SquareItem>
  );
};

export default Square;
