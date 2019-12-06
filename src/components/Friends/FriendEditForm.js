// author: Michelle Johnson
import React, { Component } from "react"
import FriendManager from "../../Modules/FriendManager"

class FriendEditForm extends Component {
    //set the initial state
    state = {
        username: "",
        email: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingFriend = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const userId = JSON.parse(localStorage.getItem("credentials"))

        const editedFriend = {
            id: this.props.match.params.friendId,
            username: this.state.username,
            email: this.state.email,
            userId: userId.id
        };

        FriendManager.update(editedFriend)
            .then(() => this.props.history.push("/friends"))
    }

    componentDidMount() {
        FriendManager.get(this.props.match.params.friendId)
            .then(friend => {
                this.setState({
                    username: friend.username,
                    email: friend.email,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input 
                            type="text" 
                            required 
                            className="form-control"
                            onChange={this.handleFieldChange} id="username" 
                            value={this.state.username}
                            />
                        <label htmlFor="username">Username</label>

                        <input 
                            type="text" 
                            required 
                            className="form-control"
                            onChange={this.handleFieldChange} id="email" 
                            value={this.state.email}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="alignRight">
                        <button type="button" disabled={this.state.loadingStatus} onClick={this.updateExistingFriend}>Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
        );
    }
}

export default FriendEditForm