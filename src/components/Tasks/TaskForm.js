import React, { Component } from 'react';
import TaskManager from '../../Modules/TaskManager';



class TaskForm extends Component {
    state = {
        taskName: "",
        completionDate: "",
        loadingStatus: false,
    };


    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        console.log(evt.target.id)
        this.setState(stateToChange);
    };

    // stateToChange[evt.target.id] this is square bracket notation on an object, review objects chapter in book 2

    /*  Local method for validation, set loadingStatus, create task object, invoke the TaskManager post method, and redirect to the full Task list
    */
    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.taskName === "" || this.state.date === "") {
            window.alert("Please input a task");
        } else {
            this.setState({ loadingStatus: true });
            const user = localStorage.getItem("credentials")
            const userId = parseInt(user)
            const newTask = {
                userId: userId,
                task: this.state.taskName,
                completionDate: this.state.date,
                completed: false
            
            };

            // Create the location and redirect user to location list
            TaskManager.post(newTask)
            .then(() => this.props.history.push("/tasks"));
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
                        id="taskName"
                        placeholder="name"
                        />
                        <label htmlFor="taskName">New task:</label>

                        <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="date"
                                placeholder="completion-date"
                            />
                            <label htmlFor="date">Date to be compledted by:</label>

                    </div>
                    <div className="alignRight">
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewTask}>Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default TaskForm;