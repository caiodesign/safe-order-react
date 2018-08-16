import React, { Component } from 'react';
//import Styled from 'styled-components';
import Wrapper from '../../Atoms/Wrapper';
import Square from '../../Atoms/Square';

class UserBox extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Laura Sousa',
        total: 120
      },
      {
        id: 2,
        name: 'Vitoria Gusmao',
        total: 300
      }
    ]
  };
  render() {
    return (
      <Wrapper>
        {this.state.users.map((user, index) => {
          return <Square key={user.id} name={user.name} total={user.total} />;
        })}
      </Wrapper>
    );
  }
}

export default UserBox;
