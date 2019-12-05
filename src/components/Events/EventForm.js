import React, { Component } from "react";
import EventManager from "../../Modules/EventManager";

class EventForm extends Component {
  state = {
    eventName: "",
    date: "",
    location: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewEvent = evt => {
    evt.preventDefault();
    if (
      this.state.eventName === "" ||
      this.state.date === "" ||
      this.state.location === ""
    ) {
      window.alert("Please fill out all fields");
    } else {
      this.setState({ loadingStatus: true });
      const event = {
        eventName: this.state.eventName,
        date: this.state.date,
        location: this.state.location,
        userId: Number(localStorage["credentials"])
      };

      EventManager.post(event).then(() => this.props.history.push("/events"));
    }
  };

  render() {
    return (
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
                type="date"
                required
                onChange={this.handleFieldChange}
                id="date"
                placeholder="Date"
              />
              <label htmlFor="date">Date</label>

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="location"
                placeholder="Location"
              />
              <label htmlFor="location">Location</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewEvent}>
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EventForm;
