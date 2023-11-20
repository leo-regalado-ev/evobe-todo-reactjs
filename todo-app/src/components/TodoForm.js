import React, { useState } from 'react';
import AddIcon from '../icons/add_icon.svg';
import Spacer from './Spacer';

function TodoForm(props) {
    const [title, setTitle] = useState('')
    
    const submit = () => {
        props.createTodo(title)
        setTitle('')
    }

    return (
        <div className='todo-card'>
            <input
                className='todo-input'
                placeholder='To-do Title'
                maxLength={48}
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
            />
            <div className='add-button' onClick={() => { submit() }}>
                <Spacer />
                    <img src={AddIcon} alt="Add" />
                <Spacer />
            </div>
        </div>
    );
}

export default TodoForm;