// author: Michelle Johnson
import React, { Component } from 'react'
//import the components we will need
import FriendCard from './FriendCard'
import FriendManager from '../../Modules/FriendManager'

class FriendList extends Component {
  //what it needs to render
  state = {
    friends: [],
  }

  componentDidMount() {
    console.log("FRIEND LIST: ComponentDidMount");
    FriendManager.getAll()
      .then((friends) => {
        this.setState({
          friends: friends
        })
      })
  }

  render() {
    console.log("FriendList: Render");

    return (
      <div className="container-cards">
        {this.state.friends.map(friend =>
        <FriendCard
          key={friend.id}
          friend={friend}
          deleteFriend={this.deleteFriend}
        />
      )}
      </div>
    )
  }

  deleteFriend = id => {
    FriendManager.delete(id)
      .then(() => {
        FriendManager.getAll()
          .then((newFriends) => {
            this.setState({
              friends: newFriends
            })
          })
      })
  }

}

export default FriendList
