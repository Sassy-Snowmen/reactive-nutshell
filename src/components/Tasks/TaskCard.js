
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import './task.css

class TaskCard extends Component {

    render() {
        return (
         <div className="card">
             <div className="card-content">
                 <h3>Task: <span className="card-taskname"></span></h3>
                 <p>Do the dishes<input type="checkbox" id="taskCheckbox"/></p>
                 <p>Completion date: 12/12/2019</p>
             </div>
         </div>

        )
    }
    
    }



export default TaskCard;
