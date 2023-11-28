import Styles from './TableEmploye.module.css';
import React, { useState } from 'react';
import add from '../../assets/mass.svg'

export const TableEmploye = () => {
  const [data, setData] = useState([
    { 
      id: 1, 
      matricula: 'uidnumber', 
      nombre: { 
        nombre: 'Juan', 
        apellidoP: 'Pérez', 
        apellidoM: 'Gómez',
        foto: 'photo.svg',
      }, 
      dependencia: 'data', 
      estatus: 'data', 
      acciones: 'data' 
    },
    { 
      id: 2, 
      matricula: 'uidnumber', 
      nombre: { 
        nombre: 'Juan', 
        apellidoP: 'Pérez', 
        apellidoM: 'Gómez',
        foto: 'photo.svg',
      }, 
      dependencia: 'data', 
      estatus: 'data', 
      acciones: 'data' 
    },
  ]);
  
  return (
    <div className={Styles.tableContainer}>
      <table className={Styles.table}>
        <thead>
          <tr className={Styles.columnName}>
            <th>Matricula</th>
            <th>Nombre</th>
            <th>Dependencia</th>
            <th>Estatus</th>
            <th>Acciones</th>
          </tr>
        </thead>
        
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={Styles.content}>

              <td>{row.matricula}</td>
            
              <td className={Styles.nameContainer}>
                <img src={row.nombre.foto} className={Styles.photo}/>
                <div className={Styles.dataEmploye}>
                  <div className={Styles.nameEmploye}>
                    {`${row.nombre.nombree} ${row.nombre.apellidooP} ${row.nombre.apellidooM}`}
                  </div>
                  <div>
                    {`${row.nombre.puesto}`}
                  </div>
                </div>
              </td>

              <td>{row.dependencia}</td>
              <td>{row.estatus}</td>
              <td>{row.acciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};