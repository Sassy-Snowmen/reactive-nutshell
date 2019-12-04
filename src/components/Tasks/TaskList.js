import React, { Component } from 'react'
//import the components we will need
import TaskCard from './TaskCard'
import TaskManager from '../../Modules/TaskManager'

class TaskList extends Component {
  //define what this component needs to render
  state = {
    tasks: [],
  }

  componentDidMount() {
    console.log("TASKS LIST: ComponentDidMount");
    //getAll from TaskManager and hang on to that data; put it in state
    TaskManager.getAll()
      .then((tasks) => {
        console.log("tasks", tasks)
        this.setState({
          tasks: tasks
        })
      })
  }
  deleteTask = id => {
    TaskManager.delete(id)
    .then(() => {
      TaskManager.getAll()
      .then((newTasks) => {
        this.setState({
            tasks: newTasks
        })
      })
    })
  }

  render() {
    console.log("Task List: Render");

    return (
      <>
        <section className="section-content">
          <button type="button" className="button" onClick={() => { this.props.history.push("/task/new") }}>
            Add Task
          </button>
        </section>
        <div className="container-cards">
          {this.state.tasks.map(task =>
            <TaskCard key={task.id} 
            task={task}
            deleteTask={this.deleteTask}
            {...this.props}
            />
          )}
        </div>
      </>
    )
  }
}

export default TaskList;
