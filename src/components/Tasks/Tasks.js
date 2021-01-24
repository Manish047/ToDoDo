import React from 'react';
import classes from './Tasks.module.css';
import Task from './Task/Task';

const Tasks = props => {
    const tasks = props.tasks.map(task => (
        <Task
            key={task.id}
            isDone={task.isDone}
            text={task.text}
            completed={() => props.taskCompleted(task.id)}
            deleted={() => props.taskDeleted(task.id)}
        />
    ));
    return (
        <div className={classes.Tasks}>
            {tasks}
        </div>
    );
}

export default Tasks;