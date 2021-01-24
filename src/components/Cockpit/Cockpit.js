import React from 'react';
import classes from './Cockpit.module.css';

import NewTask from './NewTask/NewTask';
import Categories from './Categories/Categories';

const Cockpit = props => {
    return (
        <div className={classes.Cockpit}>
            <NewTask added={props.addTask}/>
            <Categories changed ={props.changeFilter}/>
        </div>
    );
}

export default Cockpit;