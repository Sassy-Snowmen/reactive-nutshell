    import React, { Component } from 'react'
    //import the components we will need
    import MessageCard from './MessageCard'
    import MessageManager from '../../Modules/MessageManager'

    class MessageList extends Component {
        //define what this component needs to render
        state = {
            messages: [],
            loadingStatus: false,
            newMessageInput: "",
        }

        // Gets all messages from the API
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

    // This function captures what's in the input field

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        // The above line saves whatever is in input to newMessageInput in state
        this.setState(stateToChange);
    };

    // Adds a new message to message list
    constructNewMessage = evt => {
        evt.preventDefault();
        if (this.state.newMessageInput === "") {
            window.alert("Please input a message");
        } else {

            // This sets up local storage
            const user = localStorage.getItem("credentials")
            const userId = parseInt(user)

            // Create a new object
            const newMessage = {
                messages: this.state.newMessageInput,
                userId: userId,
                timeStamp: new Date().toISOString()
            };
            // Assign the current messages list into newMessageArray
            const newMessageArray = this.state.messages
            // Add the newMessage object to the array
            newMessageArray.push(newMessage)
            // Update the whole newMessageArray
            this.setState({
                loadingStatus: true,
                messages: newMessageArray
            });
// Do the fetch call to post this
            MessageManager.post(newMessage)

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