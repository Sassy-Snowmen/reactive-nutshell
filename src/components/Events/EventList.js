import React, { Component } from 'react'
    import EventCard from './AnimalCard'
    import EventManager from '../../modules/AnimalManager'

    class EventList extends Component {
        //define what this component needs to render
        state = {
            eventName: [],
            date: [],
            location: []
        }

    componentDidMount(){
        console.log("EVENT LIST: ComponentDidMount");
        //call getAll from EventManager and hang on to that data and put it in state
        EventManager.getAll()
        .then((events) => {
            this.setState({
                eventName: eventName,
                date: date,
                location: location
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
