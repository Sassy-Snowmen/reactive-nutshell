// author: Michelle Johnson
import React, { Component } from 'react';
import FriendManager from '../../Modules/FriendManager';

class FriendForm extends Component {
    state = {
        username: "",
        email: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {}; 
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewFriend = evt => {
        evt.preventDefault();
        if (

            this.state.username === "" || this.state.email === ""

        ) {
            window.alert("Please input an friend username and email");
        } else {
            this.setState({ loadingStatus: true });
            const userId = JSON.parse(localStorage.getItem("credentials"))

            const friend = {

                username: this.state.username,
                email: this.state.email,

                userId: userId.id,
            };
            FriendManager.post(friend)
            .then(() => this.props.history.push("/friends"));
        }

    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input type="text" required onChange={this.handleFieldChange} id="username" placeholder="Friend Username"/>
                        <label htmlFor="username">Username</label>
                        <input type="text" required onChange={this.handleFieldChange} id="email" placeholder="Friend Email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="alignRight">
                        <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewFriend}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default FriendForm