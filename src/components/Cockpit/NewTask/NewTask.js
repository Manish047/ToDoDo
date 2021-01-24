import React, { Component } from 'react';
import classes from './NewTask.module.css';

class NewTask extends Component {

    state = {
        taskText: ''
    }

    inputChangeHandler = event => {
        this.setState({ taskText: event.target.value })
    }

    formSubmitHandler = event => {
        event.preventDefault();
        if (this.state.taskText.trim() === '') return;
        this.props.added(this.state.taskText);
        this.setState({taskText: ''})
    }

    render() {
        return (
            <div className={classes.NewTask}>
                <form onSubmit={this.formSubmitHandler}>
                    <input type="text" placeholder="Enter Activity" onChange={this.inputChangeHandler} value={this.state.taskText} />
                    <button className={classes.Add} type="submit">➕</button>
                </form>
            </div>
        );
    }

}

export default NewTask;