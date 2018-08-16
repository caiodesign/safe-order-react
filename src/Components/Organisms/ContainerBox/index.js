import React, { Component } from 'react';
import Container from '../../Atoms/Container';
import UserBox from '../../Molecules/UserBox';

class Box extends Component {
  render() {
    return (
      <Container>
        <UserBox />
      </Container>
    );
  }
}

export default Box;
