import React from 'react';
import './App.css';
import Col from './Col'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{'MiMi': ['我最可愛', '給我treat']}, 
              {'LinLin': ['好想睡喔', '好煩哦']}, 
              {'BuBu': ['BuBuBubuububububububububu', 'ZZZzzz...']}, 
              {'PiPi': ['肚子好餓', '好胖喔']}],
    }

    this.addMessage = this.addMessage.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  addMessage = (i, user) => {
    this.state.users[i][user].push('msg' + (this.state.users[i][user].length + 1));
    console.log(this.state.users)
    this.setState({
      users: this.state.users,
    })
  }

  moveLeft = (from, user1, user2, msg, msgIdx) => {
    if(from === 0) return;
    this.state.users[from - 1][user2].push(msg);
    this.state.users[from][user1].splice(msgIdx, 1);
    this.setState({
      users: this.state.users,
    })
  }

  moveRight = (from, user1, user2, msg, msgIdx) => {
    if(from === 3) return;
    this.state.users[from + 1][user2].push(msg);
    this.state.users[from][user1].splice(msgIdx, 1);
    this.setState({
      users: this.state.users,
    })
  }

  render () {
    return (
      <div className="App">
        {this.state.users.map((user, index) => {
          return <Col 
            users={user} 
            index={index} 
            addMessage={this.addMessage}
            moveLeft={this.moveLeft}
            moveRight={this.moveRight}
          ></Col>;
        })}
      </div>
    )
  }
}

export default App;
