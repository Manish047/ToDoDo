import React from 'react';
import classes from './Categories.module.css';

const Categories = props => {
    return (
        <select className={classes.Categories} onChange={(event) => props.changed(event.target.value)}>
            <option value='all'>All</option>
            <option value='pending'>Pending</option>
            <option value='completed'>Completed</option>
        </select>
    )
}

export default Categories;