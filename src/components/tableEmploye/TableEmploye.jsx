import Styles from './TableEmploye.module.css';
import React, { useEffect, useState } from 'react';
import add from '../../assets/mass.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@chakra-ui/react';

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

                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>

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
                                <td>{emp.nombre}</td>
                                <td>{emp.apellidop}</td>
                                <td>{emp.apellidom}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button onClick={prevPage} >-1</button>
                    <button onClick={nextPage}>+</button>
                    <button onClick={goLastPage}>ultima pagina</button>
                </div>
                </>
 
            )}
        
        </div>
    );
};