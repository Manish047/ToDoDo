import * as actionTypes from './actionTypes';

export const createTask = taskText => {
    const task = {
        id: new Date().toDateString() + '' + Math.random(),
        isDone: false,
        text: taskText
    }
    return {
        type: actionTypes.CREATE_TASK,
        task: task
    }
}

export const taskCompleted = taskId => {
    return {
        type: actionTypes.TASK_COMPLETED,
        taskId: taskId
    }
}

export const taskDeleted = taskId => {
    return {
        type: actionTypes.TASK_DELETED,
        taskId: taskId
    }
}