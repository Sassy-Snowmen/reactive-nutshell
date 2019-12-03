import React, { Component } from 'react'
//import the components we will need
import FriendCard from './FriendCard'
import APIManager from './APIManager'

class FriendList extends Component {
    //what it needs to render
    state = {
        friends: [],
    }

componentDidMount(){
    console.log("FRIEND LIST: ComponentDidMount");
    APIManager.getAll()
    .then((friends) => {
        this.setState({
            friends: friends
        })
    })
}

render(){
    console.log("FriendList: Render");
  
    return(
      <div className="container-cards">
        {this.state.friends.map(friend =>
          <FriendCard key={friend.id} friend={friend} />
        )}
      </div>
    )
  }
}

export default FriendList
