import React from 'react';

export default class AddCard extends React.Component {
  constructor(props) {
    super(props);

    this.addCard = this.addCard.bind(this);
  }

  addCard = (e) => {
    e.preventDefault();
    this.props.addMessage(this.props.index, this.props.user);
  }

  render() {
    return (
      <button onClick={this.addCard} style={{fontSize: '14px'}}>
        + Add a card
      </button>
    )
  }
}