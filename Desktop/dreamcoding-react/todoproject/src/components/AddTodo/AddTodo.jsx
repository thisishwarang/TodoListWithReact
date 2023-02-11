import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css'

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim() === ''){
            alert('할일을 입력해!');
        } else {
            onAdd({id: uuidv4(), text, status: 'active'});
            // localStorage.setItem('todos', text);
            setText('');
        }
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                className={styles.input}
                type='text'
                placeholder='Add Todo'
                value={text}
                //value 없으니까 setText(''); 초기화가 안된다
                onChange={(e)=>{
                    setText(e.target.value);
                }}
                onKeyUp={(e)=>{window.event.keyCode==13 && setText(e.target.value);}
                }
            />
            <button className={styles.button}>Add</button>   
        </form>
    );
}

