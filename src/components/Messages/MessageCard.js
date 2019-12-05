import React, { Component } from 'react';

class MessageCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>{this.props.messages.messages}</h3>
          <p>{this.props.messages.timeStamp}</p>
        </div>
      </div>
    );
  }
}

export default MessageCard;