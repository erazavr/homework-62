import React from 'react';

const Task = (props) => {
    return (
        <div className='tasks'>
            <p className = 'tasks_txt'>{props.text}</p>
            <button className = 'tasks_btn' onClick = {props.remove}>
                <i className="fas fa-trash-alt"/>
            </button>
        </div>
    );
};

export default Task;