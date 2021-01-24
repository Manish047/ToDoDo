import * as actionTypes from './actions/actionTypes';

const initialState = {
    tasks: []
}

const addNewTask = (state, action) => {
    const tasks = [...state.tasks];
    const updatedTasks = tasks.concat(action.task);
    return {
        ...state,
        tasks: updatedTasks
    }
}

const setTaskCompleted = (state, action) => {
    const updatedTasks = [...state.tasks];
    const updatedTaskIndex = updatedTasks.findIndex(task => task.id === action.taskId);
    updatedTasks[updatedTaskIndex].isDone = !updatedTasks[updatedTaskIndex].isDone;
    return {
        ...state,
        tasks: updatedTasks
    }
}

const removeTask = (state, action) =>{
    const tasks = [...state.tasks];
    const updatedTasks = tasks.filter(task => task.id !== action.taskId);
    return {
        ...state,
        tasks: updatedTasks
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.CREATE_TASK):
            return addNewTask(state, action);
        case (actionTypes.TASK_COMPLETED):
            return setTaskCompleted(state, action);
        case(actionTypes.TASK_DELETED):
            return removeTask(state, action);
        default:
            return state;
    }
}

export default reducer;