// Cassie Boyd

import React, { Component } from 'react'
    import EventCard from './EventCard'
    import EventManager from '../../Modules/EventManager'

    class EventList extends Component {
        //define what this component needs to render
        state = {
            events: []
        }

    componentDidMount(){
        console.log("EVENT LIST: ComponentDidMount");
        //call getAll from EventManager and hang on to that data and put it in state
        EventManager.getAll()
        .then((eventsArray) => {
            this.setState({
                events: eventsArray
            })
        })
    }

    render(){
        console.log("EVENT LIST: Render");
// When using .map (which is like forEach), each child in the list must have a unique key prop. Because EventCard is included in the render of EVentList, it is considered a child of EventList.
        return(
            <div className="container-cards">
                {this.state.events.map(eachEvent => <EventCard key={eachEvent.id} event={eachEvent}/>)}
            </div>
        )
    }
}

export default EventList