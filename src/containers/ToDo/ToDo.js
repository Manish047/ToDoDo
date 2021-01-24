import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cockpit from '../../components/Cockpit/Cockpit';
import Tasks from '../../components/Tasks/Tasks';
import classes from './ToDo.module.css';
import * as actions from '../../store/actions/actions';

class ToDo extends Component {

    state = {
        filter: 'all'
    }

    changeFilter = filter => {
        this.setState({ filter: filter });
    }

    render() {

        let tasks = null;
        switch (this.state.filter) {
            case ('all'):
                tasks = this.props.tasks;
                break;
            case ('pending'):
                tasks = this.props.tasks.filter(task => task.isDone === false);
                break;
            case ('completed'):
                tasks = this.props.tasks.filter(task => task.isDone === true);
                break;
            default:
                tasks = this.props.tasks;
        }

        return (
            <div className={classes.ToDo}>
                <h1 style={{ margin: '0', padding: '16px 0' }}>ToDoDoDo</h1>
                <Cockpit addTask={this.props.onCreateNewTask} changeFilter={this.changeFilter} />
                <Tasks
                    tasks={tasks}
                    taskCompleted={this.props.onTaskCompleted}
                    taskDeleted={this.props.onTaskDeleted} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { tasks: state.tasks }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateNewTask: (taskText) => dispatch(actions.createTask(taskText)),
        onTaskCompleted: (taskId) => dispatch(actions.taskCompleted(taskId)),
        onTaskDeleted: (taskId) => dispatch(actions.taskDeleted(taskId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);