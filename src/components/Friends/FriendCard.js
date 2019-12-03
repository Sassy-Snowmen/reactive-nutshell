import React, { Component } from 'react';

class FriendCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Username: <span className="card-friendName">bob1234girl</span></h3>
          <p>Email: bob1234girl@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default FriendCard;