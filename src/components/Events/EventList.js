// Cassie Boyd

import React, { Component } from "react";
import EventCard from "./EventCard";
import EventManager from "../../Modules/EventManager";
import "./EventList.css"

class EventList extends Component {
  //define what this component needs to render
  state = {
    events: []
  };

  componentDidMount() {
    console.log("EVENT LIST: ComponentDidMount");
    //call getAll from EventManager and hang on to that data and put it in state
    EventManager.getAll().then(eventsArray => {
      this.setState({
        events: eventsArray
      });
    });
  }

  deleteEvent = id => {
    EventManager.delete(id).then(() => {
      EventManager.getAll().then(newEvents => {
        this.setState({
          events: newEvents
        });
      });
    });
  };

  render() {
    console.log("EVENT LIST: Render", this.props);
    // When using .map (which is like forEach), each child in the list must have a unique key prop. Because EventCard is included in the render of EventList, it is considered a child of EventList.
    return (
      <React.Fragment>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/events/new");
            }}>
            Add Event
          </button>
        </section>

        <div className="container-cards">
          {this.state.events.map(eachEvent => (
            <EventCard
              key={eachEvent.id}
              event={eachEvent}
              deleteEvent={this.deleteEvent}
              {...this.props}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default EventList;
