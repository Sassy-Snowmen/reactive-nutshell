
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import './task.css

class TaskCard extends Component {




    render() 

    {
        return (
            
            <div className="card">
                <div className="card-content">
                    <h3>Task: <span className="card-taskname">{this.props.task.task}</span> 
                        <input type="checkbox" 
                            id="taskCheckbox" 
                            onChange={() => this.props.handleCheckbox()} 
                        />
                    </h3>
                    <p>To be completed by: {this.props.task.completionDate} </p>
                    <button type="button"
                        onClick={() => this.props.deleteTask(this.props.task.id)}>Discharge</button>
                    <button type="button"
                        onClick={() =>  this.props.history.push(`/tasks/${this.props.task.id}/edit`) }>Edit</button>
                </div>
            </div>
            

        )
    }

}



export default TaskCard;
