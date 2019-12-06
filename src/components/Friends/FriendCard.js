// author: Michelle Johnson
import React, { Component } from 'react';


class FriendCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3><span className="card-friendName">{this.props.friend.username}</span></h3>
          <button type="button" onClick={() => {this.props.history.push(`/friends/${this.props.friend.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteFriend(this.props.friend.id)}>Delete</button>

        </div>
      </div>
    );
  }
}

export default FriendCard;