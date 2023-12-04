import Styles from '../actionBar/ActionBar.module.css';
import React, { useState } from 'react';
import add from '../../assets/mass.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const ActionBar = ( {title, setData} ) => {
    const [search, setSearch] = useState('');

    const searchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        const resp = await axios.get(
            `http://localhost:3000/api/employee?s=${search}`
        );

        // send resp.data to TableEmploye.jsx
        const { employees } = resp.data;

        setData(employees);
    };

    return (
        <div className={Styles.buttons}>
            
            <p className={Styles.screenTitle}>
				{title}
			</p>
            
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <form action="" onSubmit={handleSearchSubmit}>
                    <input
                        placeholder="Buscar"
                        value={search}
                        onChange={searchChange}
                        className={Styles.search}
                    />
                </form>
            </div>
        </div>
    );
};