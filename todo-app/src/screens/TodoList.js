import React, { useState, useEffect } from 'react';
import './style.css'
import TodoCard from '../components/TodoCard';
import Spacer from '../components/Spacer';
import TodoForm from '../components/TodoForm';

function TodoList(props) {
    const [todos, setTodos] = useState([])

    const loadTodos = () => {
        fetch('http://localhost:9000/todo')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setTodos(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    const updateTodo = (todo) => {
        const requestData = {
            "title": todo.title,
            "completed": true
        }
        console.log("requestData: ", requestData)
        fetch('http://localhost:9000/todo/' + todo.key,
            {
                method: 'PUT',
                body: JSON.stringify(requestData),
                headers: {
                    "Content-Type": "application/json"
                },
                cache: "no-cache",
                credentials: "same-origin"
            }
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            loadTodos()
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    const createTodo = (title) => {
        const requestData = {
            "title": title
        }
        console.log("requestData: ", requestData)
        fetch('http://localhost:9000/todo/',
            {
                method: 'POST',
                body: JSON.stringify(requestData),
                headers: {
                    "Content-Type": "application/json"
                },
                cache: "no-cache",
                credentials: "same-origin"
            }
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            loadTodos()
        })
        .catch((err) => {
            console.log(err.message);
        });

    }
    
    useEffect(() => {
        loadTodos()
    }, [])

    let todoList = []

    if (todos) {
        todos.forEach(todoItem => {
            todoList.push(
                <TodoCard
                    todo={todoItem}
                    key={todoItem.key}
                    onCheck={(todo) => { updateTodo(todo) }}
                />
            )
        });
    }

    
    return (
        <div className='main-container'>
            <div className='todo-list'>
                {todoList}
                <TodoForm createTodo={(title) => { createTodo(title) }} />
            </div>
            <Spacer />
        </div>
    );
}

export default TodoList;