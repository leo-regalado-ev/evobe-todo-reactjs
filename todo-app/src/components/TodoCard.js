import React from 'react';
import Spacer from './Spacer';
import './style.css'
import RadioButton from './RadioButton';

function TodoCard(props) {

    const onCheck = () => {
        props.onCheck(props.todo)
    }

    return (
        <div className="todo-card">
            {props.todo.title}
            <Spacer />
            <RadioButton
                onCheck={() => { onCheck() }}
                checked={props.todo.completed}
            />
        </div>
    );
}

export default TodoCard;