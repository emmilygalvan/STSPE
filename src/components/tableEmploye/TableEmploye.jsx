import Styles from './TableEmploye.module.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import back from '../../assets/back.svg'
import next from '../../assets/next.svg'
import last from '../../assets/lastpage.svg'
import first from '../../assets/firstpage.svg'
import edit from '../../assets/editButton.svg'

export const TableEmploye = () => {
    
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [lastPage, setLastPage] = useState(null);
    const [page, setPage] = useState(1);

    const nextPage = () => {
        setPage(page + 1)
    }

    const prevPage = () => {
        if ( page <= 1) {
            return
        } 

        setPage( page - 1);
    }

    const goLastPage = () => {
        setPage(lastPage)
    }

    const getStatusColorClass = (estatus) => {
        switch (estatus) {
          case 'activo':
            console.log('Activo');
            return Styles.activo;
          case 'licencia':
            console.log('Licencia');
            return Styles.licencia;
          case 'baja':
          case 'expulsado':
            console.log('Inactivo');
            return Styles.inactivo;
          case 'finado':
            console.log('Finado');
            return Styles.finado;
        }
      };

    useEffect(() => {
        const fetchEmployees = async () => {
            const resp = await axios.get(`http://localhost:3000/api/employee?p=${page}`);
            const { employees, lastPage} = resp.data;
            setLastPage(lastPage)
            setData(employees);
        };
        fetchEmployees();
    }, [page]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className={Styles.tableContainer}>
            {data.length <= 0 ? (
                <p> Cargando data </p>
            ) : (
                <>
                    <table className={Styles.table}>

                        <thead>

                            <th></th>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Dependencia</th>
                            <th>Estatus</th>

                        </thead>

                        <tbody className={Styles.content}>
                            {data.map((emp, i) => (
                                <tr
                                    key={i}
                                    onClick={() => {
                                        navigate('/empleado', {
                                            state: emp,
                                        });
                                    }}
                                >
                                    <td  className={Styles.photo}> 
                                        <img className={Styles.photoConteiner}/> 
                                        {emp.fotoempleado}
                                    </td>
                                    <td className={Styles.id}>
                                        {emp.id} 
                                    </td>
                                    <td  className={Styles.name}>
                                        {emp.nombre}
                                        {emp.apellidop} 
                                        {emp.apellidom}
                                    </td>
                                    <td className={Styles.dependencia}>
                                        {emp.dependencia}
                                    </td>
                                    
                                    <td className={Styles.estatus}>
                                        <span 
                                        style={{
                                            display: 'inline-block',
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            marginRight: '5px',
                                            backgroundColor: getStatusColorClass(emp.estatus),
                                          }}
                                        />
                                        {emp.estatus}
                                    </td>                             

                                    <td className={Styles.actions}> 
                                        <button className={Styles.edit} 
                                            onClick={() => {
                                                navigate('/editEmpleado', {
                                                    state
                                                })
                                            }}>

                                            <img src={edit} alt="edit"/> 
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                </table>

                <div className={Styles.pagination}>
                    <button onClick={goLastPage} className={Styles.firsend} >  <img src={first} alt="first"/> </button>
                    <button onClick={prevPage}  className={Styles.pag} > <img src={back} alt="back"/> </button>
                    <button onClick={nextPage}  className={Styles.pag} > <img src={next} alt="next"/> </button>
                    <button onClick={goLastPage} className={Styles.pag} >  <img src={last} alt="last"/> </button>
                </div>

                </>
 
            )}
        
        </div>
    );
};