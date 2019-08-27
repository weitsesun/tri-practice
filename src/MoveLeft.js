import React from 'react';

export default class MoveLeft extends React.Component {

  moveLeft = (e) => {
    e.preventDefault();
    let from = this.props.from;

    if(from === 0) return;

    let user1 = users[from];
    let user2 = users[from - 1];
    let msg = this.props.msg;
    let msgIdx = this.props.msgIdx;
    this.props.moveLeft(from, user1, user2, msg, msgIdx);
  }

  render() {
    return (
      <button id="left" onClick={this.moveLeft.bind(this)} style={{textAlign: 'center'}}>
       ‹
      </button>
    )
  }
}

const users = {
  0: 'MiMi',
  1: 'LinLin',
  2: 'BuBu',
  3: 'PiPi',
}