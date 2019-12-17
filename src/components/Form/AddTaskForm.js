import React from 'react';

const AddTaskForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onsubmit}>
                <input type="text" placeholder='Add new task' className='field' value={props.text} onChange={props.onChange}/>
                <button type='submit' className='btn' >Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;