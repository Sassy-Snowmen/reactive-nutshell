import React, { Component } from "react"
import TaskManager from "../../Modules/TaskManager"

class TaskEditForm extends Component {
    //set the initial state
    state = {
      taskName: "",
      date: "",
      loadingStatus: true,
      completed: false,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      console.log(evt.target.id)
      this.setState(stateToChange)
    }

    updateExistingTask= evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const user = localStorage.getItem("credentials")
      const userId = parseInt(user)
      const editedTask = {
        userId: userId,
        id: this.props.match.params.taskId,
        task: this.state.taskName,
        completionDate: this.state.date,
        complete: this.state.completed

      };

      TaskManager.update(editedTask)
      .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
      TaskManager.get(this.props.match.params.taskId)
      .then(task => {
          this.setState({
            taskName: task.task,
            date: task.completionDate,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="taskName"
                value={this.state.taskName}
              />
              <label htmlFor="taskName">Task:</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date to be completed by:</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingTask}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default TaskEditForm