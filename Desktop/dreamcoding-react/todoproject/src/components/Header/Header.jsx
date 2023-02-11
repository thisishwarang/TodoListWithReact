import React, { useContext } from 'react';
import { FaLightbulb, FaMoon } from 'react-icons/fa';
import styles from './Header.module.css'
import { DarkModeContext, useDarkMode } from './../../context/DarkModeContext';

export default function Header({filters, filter, setFilter}) {
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <header className={styles.header}>
            <button className={styles.toggle} onClick={toggleDarkMode}>
                {
                    darkMode
                    ? <FaLightbulb />
                    : <FaMoon />  
                }
            </button>
            <ul className={styles.filters}>
                {
                    filters.map((v, i)=>(
                        <li key={i}>
                            <button  className={`${styles.filter} ${filter === v && styles.selected}`} onClick={()=>{
                                setFilter(v);
                            }}>{v}</button>
                        </li>
                    ))
                }
            </ul>
        </header>
    );
}

