import React, { Component } from 'react';
import FriendManager from '../../Modules/FriendManager';

class FriendDetail extends Component {

  state = {
      userId: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("FriendDetail: ComponentDidMount");
    //get(id) from FriendManager and hang on to the data; put it into state
    FriendManager.get(this.props.friendId)
    .then((friend) => {
      this.setState({
        userId: friend.userId,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>UserId: <span style={{ color: 'darkslategrey' }}>{this.state.userId}</span></h3>
        </div>
      </div>
    );
  }
}

export default FriendDetail;