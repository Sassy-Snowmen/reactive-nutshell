// Cassie Boyd
// Allows use of react components
import React, { Component } from "react";

class EventCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Event:
            <span className="card-eventname">{this.props.event.eventName}</span>
          </h3>
          <p>Date: {this.props.event.date}</p>
          <p>Location: {this.props.event.location}</p>
        </div>
      </div>
    );
  }
}

export default EventCard;
