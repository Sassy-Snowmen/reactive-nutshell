import React, { Component } from 'react';
import { Link } from "react-router-dom";


class FriendCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Username: <span className="card-friendName">{this.props.friend.userId}</span></h3> 
          <Link to={`/friends/${this.props.friend.id}`}><button>Details</button></Link>

          <button type="button" onClick={() => this.props.deleteFriend(this.props.friend.id)}>Delete</button>

        </div>
      </div>
    );
  }
}

export default FriendCard;