import React, { Component } from 'react';
import EventManager from '../../Modules/EventManager';

class EventForm extends Component {
    state = {
        eventName: "",
        date: "",
        location: "",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.eventName === "" || this.state.date === "" || this.state.location === "") {
            window.alert("Please fill out all fields");
        } else {
            this.setState({ loadingStatus: true });
            const event = {
                name: this.state.eventName,
                breed: this.state.date,
                location: this.state.location
            };

            // Create the animal and redirect user to animal list
            EventManager.post(event)
            .then(() => this.props.history.push("/events"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="eventName"
                        placeholder="Event name"
                        />
                        <label htmlFor="eventName">Event Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"
                        />
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default EventForm