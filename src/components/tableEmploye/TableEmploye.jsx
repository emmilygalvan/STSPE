import Styles from './TableEmploye.module.css';
import React, { useEffect, useState } from 'react';
import add from '../../assets/mass.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const TableEmploye = () => {

  const navigate = useNavigate();

  const [data, setData] = useState([

  ]);
  useEffect(
    () => {
      async() => {
         const resp = await axios.get('http://localhost:3000/api/employee')
         setData(datosViejos => [...datosViejos, resp.data])
      }
      console.log(data)
    },[])
  
  return (
    <div className={Styles.tableContainer}>
      {
        (data.length == 0 && data == undefined) ? (<p> No hay data </p>) : (<p> Si hay  </p>)
      }
    </div>
  );
};