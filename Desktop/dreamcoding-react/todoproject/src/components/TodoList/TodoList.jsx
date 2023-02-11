import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'
import { useEffect } from 'react';

export default function TodoList({filter}) {
    const [todos, setTodos] = useState(()=>readTodos());
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleUpdate = (updated) => {
        setTodos(todos.map((todo)=>todo.id === updated.id ? updated : todo));
    }
    const handleDelete = (deleted) => {
        setTodos(todos.filter((todo)=>todo.id !== deleted.id))
    }
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    const filtered = getFilteredItems(todos, filter);
    return (
            <section className={styles.container}>
                <ul className={styles.list}>
                    {filtered.map((todo, i)=>
                         <Todo 
                            key={todo.id}
                            todo={todo}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                         />
                    )}
                </ul>
                <AddTodo onAdd={handleAdd}/>
            </section>
    );
}
function readTodos () {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}
function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    } 
    return todos.filter((todo)=> todo.status === filter);
}

