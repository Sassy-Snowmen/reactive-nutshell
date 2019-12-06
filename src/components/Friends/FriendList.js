// author: Michelle Johnson
import React, { Component } from 'react'
import FriendCard from './FriendCard'
import FriendManager from '../../Modules/FriendManager'

class FriendList extends Component {
  //define what this component needs to render
  state = {
    friends: [],
  }

  componentDidMount() {
    console.log("FRIEND LIST: ComponentDidMount");
    //getAll from FriendManager and hang on to that data; put it in state
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
      <>
        <br/>
        <center><strong></strong><em><h1>Friends</h1></em><strong></strong></center>
        <section className="section-content">
          <button type="button" className="btn" onClick={() => {this.props.history.push("/friends/new") }}>
            Add Friend
          </button>
        </section>
        <div className="container-cards">
          {this.state.friends.map(friend =>
            <FriendCard
              key={friend.id}
              friend={friend}
              deleteFriend={this.deleteFriend}
              {...this.props}
            />
          )}
        </div>
      </>
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
