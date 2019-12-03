// Allows use of react components
import React, { Component } from 'react';

class EventCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Event:<span className="card-eventname">County Fair</span></h3>
                    <p>Date: 2020-09-11</p>
                    <p>Location: Fairgrounds</p>
                </div>
            </div>
        )

    }
}

export default EventCard;