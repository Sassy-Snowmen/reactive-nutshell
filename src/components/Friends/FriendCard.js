// author: Michelle Johnson
import React, { Component } from 'react';
import { Link } from "react-router-dom";


class FriendCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Username: <Link><span className="card-friendName">{this.props.friend.user.username}</span></Link></h3>

          <button type="button" onClick={() => this.props.deleteFriend(this.props.friend.id)}>Delete</button>

        </div>
      </div>
    );
  }
}

export default FriendCard;