import React from 'react';
import MoveLeft from './MoveLeft';
import MoveRight from './MoveRight';

export default class Card extends React.Component {

  render() {
    return (
      <div id='message' style={{height: '30px', lineHeight: '30px', verticalAlign: 'middle'}}>
        <MoveLeft 
        moveLeft={this.props.moveLeft}
        from={this.props.index} 
        msgIdx={this.props.msgIdx}
        msg={this.props.message}
        />
        <span id='text'>
          {this.props.message}
        </span>
        <MoveRight 
        moveRight={this.props.moveRight}
        from={this.props.index} 
        msgIdx={this.props.msgIdx}
        msg={this.props.message}
        />
      </div>
    )
  }
}