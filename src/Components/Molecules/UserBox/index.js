import React, { Component } from 'react';
//import Styled from 'styled-components';
import Wrapper from '../../Atoms/Wrapper';
import Square from '../../Atoms/Square';

class UserBox extends Component {
  render() {
    return (
      <Wrapper>
        <Square>User.name</Square>
      </Wrapper>
    );
  }
}

export default UserBox;
