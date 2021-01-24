import React from 'react';
import classes from './Task.module.css';

const Task = props => {

    const assignedClasses = [classes.Task]
    if (props.isDone) {
        assignedClasses.push(classes.Done);
    }

    return (
        <div className={assignedClasses.join(' ')}>
            <div className={classes.Text}>{props.text}</div>
            <button className={classes.Delete} onClick={props.deleted}>❌</button>
            <button className={classes.Completed} onClick={props.completed}>✅</button>
        </div>
    )
}

export default Task;