    import React, { Component } from 'react'
    //import the components we will need
    import MessageCard from './MessageCard'
    import MessageManager from '../../Modules/MessageManager'

    class MessageList extends Component {
        //define what this component needs to render
        state = {
            messages: [],
            loadingStatus: false,
        }

    componentDidMount(){
        console.log("MESSAGE LIST: ComponentDidMount");
        //getAll from MessageManager and hang on to that data; put it in state
        MessageManager.getAll()
        .then((messagesArray) => {
            this.setState({
                messages: messagesArray
            })
        })
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewMessage = evt => {
        evt.preventDefault();
        if (this.state.messages === "") {
            window.alert("Please input a message");
        } else {
            // const newMessage = document.getElementById("newMessageInput").value
            this.setState({ loadingStatus: true });
            const newMessage = {
                messages: this.state.newMessage
            };

            // Create the animal and redirect user to animal list
            MessageManager.post(newMessage)
            .then(() => this.props.history.push("/messages"));
        }
    };

    render(){
        console.log(this.state);

        return(
            <React.Fragment>
                <section>
                    <form>
                        <fieldset>
                            <div className="formgrid">
                                <input
                                type="text"
                                required
                                id="newMessageInput"
                                onChange={this.handleFieldChange}
                                placeholder="Enter a New Message"
                                />
                                <label htmlFor="newMessageInput">Name</label>
                            </div>
                            <div className="alignRight">
                                <button
                                    type="button"
                                    disabled={this.state.loadingStatus}
                                    onClick={this.constructNewMessage}>
                                    Submit
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </section>
                <div className="container-cards">
                    {this.state.messages.map(eachMessage => <MessageCard key={eachMessage.id} messages={eachMessage}/>)}
                </div>
            </React.Fragment>
        )
    }
}

export default MessageList