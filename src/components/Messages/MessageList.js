    import React, { Component } from 'react'
    //import the components we will need
    import MessageCard from './MessageCard'
    import MessageManager from '../../Modules/MessageManager'

    class MessageList extends Component {
        //define what this component needs to render
        state = {
            messages: [],
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

    render(){
        console.log("ANIMAL LIST: Render");

        return(
            <React.Fragment>
                <section>
                    <form>
                        <fieldset>
                            <div className="formgrid">
                                <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="newMessageInput"
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