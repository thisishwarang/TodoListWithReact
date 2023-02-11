import React from 'react';
import styles from './Todo.module.css'
import {FaTrash} from 'react-icons/fa';

export default function Todo({todo, onUpdate, onDelete}) {
    const {id, text, status} = todo;
    const handleUpdate = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
    }
    const handleDelete = () => {
        onDelete(todo)
    }
    return (
            <li className={styles.todo}>
                <input 
                    className={styles.checkbox}
                    type='checkbox'
                    id={id}
                    checked={status === 'completed'}
                    onChange={handleUpdate}
                />
                <label htmlFor={id} className={styles.text}>{text}</label>
                <span className={styles.icon}>
                    <button onClick={handleDelete} className={styles.button}><FaTrash /></button>
                </span>
            </li>
    );
}

