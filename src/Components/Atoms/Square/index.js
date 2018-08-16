import React from 'react';
import Styled from 'styled-components';

const BoxItem = Styled.div`
  width: 100%;
`;

const Square = props => {
  return <BoxItem>{props.children}</BoxItem>;
};

export default Square;
