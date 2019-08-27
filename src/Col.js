import React from 'react';
import Card from './Card'
import AddCard from './AddCard';

export default class Col extends React.Component {
  
  render() {
    let userName = Object.keys(this.props.users)[0]
    let messages = this.props.users[userName]; 
    return (
      <div className='board'>
        <div className='col' id={userName} style={{backgroundColor: color[userName]}}>
          <span id="oneName">{userName}</span>
        </div>
        {messages.map((msg, msgIdx) => {
          return <Card message={msg} 
                      index={this.props.index}
                      moveLeft={this.props.moveLeft}
                      msgIdx={msgIdx}
                      moveRight={this.props.moveRight}
          ></Card>
        })}
        <AddCard addMessage={this.props.addMessage} index={this.props.index} user={userName}/>
      </div>
    )
  }
}

const color = {
  'MiMi': '#8E6E95',
  'LinLin': '#39A59C',
  'BuBu': '#344759',
  'PiPi': '#E8741E',
}