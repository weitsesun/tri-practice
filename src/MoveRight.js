import React from 'react';

export default class MoveRight extends React.Component {

  moveRight = (e) => {
    e.preventDefault();
    let from = this.props.from;

    if(from === 3) return;

    let user1 = users[from];
    let user2 = users[from + 1];
    let msg = this.props.msg;
    let msgIdx = this.props.msgIdx;
    this.props.moveRight(from, user1, user2, msg, msgIdx);
  }

  render() {
    return (
      <button id="right" onClick={this.moveRight.bind(this)}>
       ›
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