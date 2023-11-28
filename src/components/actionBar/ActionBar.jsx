import Styles from './ActionBar.module.css';
import React, { useState } from 'react';
import add from '../../assets/mass.svg';
import { Link } from 'react-router-dom'

export const ActionBar = () => {
  return (
    <div className={Styles.buttons}>
      <button className={Styles.filter}> <img src={add} alt="add" />Filtrar</button>
      <div>
        <button className={Styles.new}><Link to={'/registro'}>Nuevo</Link> </button>
        <input placeholder='Buscar' className={Styles.search} />
      </div>
    </div>
  );
};