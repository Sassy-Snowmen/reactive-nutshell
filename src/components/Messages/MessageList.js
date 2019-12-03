    import React, { Component } from 'react'
    //import the components we will need
    import MessageCard from './MessageCard'
    import MessageManager from '../../modules/MessageManager'

    class MessageList extends Component {
        //define what this component needs to render
        state = {
            animals: [],
        }

    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from MessageManager and hang on to that data; put it in state
        MessageManager.getAll()
        .then((animals) => {
            this.setState({
                animals: animals
            })
        })
    }

    render(){
        console.log("ANIMAL LIST: Render");

        return(
            <div className="container-cards">
                {this.state.animals.map(animal => <AnimalCard />)}
            </div>
        )
    }
}

export default AnimalList