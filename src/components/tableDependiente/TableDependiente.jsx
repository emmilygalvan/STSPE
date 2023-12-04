import Styles from '../tableDependiente/TableDependiente.module.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import back from '../../assets/back.svg'
import next from '../../assets/next.svg'
import last from '../../assets/lastpage.svg'
import first from '../../assets/firstpage.svg'
import edit from '../../assets/editButton.svg'

export const TableDependiente = ( { data, setData} ) => {
    
    const navigate = useNavigate();

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

    const goFirstPage = () => {
        setPage(1)
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

                            <th>Dependiente</th>
                            <th>Sindicalizado</th>
                            <th>Edad</th>
                            <th>Parentesco</th>

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
                                    
                                    <td  className={Styles.name}>
                                        <div> {emp.nombredependiente} {emp.apellidopdependiente} {emp.apellidomdependiente} </div>
                                    </td>

                                    <td  className={Styles.name}>
                                        <div> {emp.nombre} {emp.apellidop} {emp.apellidom} </div>
                                    </td>

                                    <td className={Styles.dependencia}>
                                        {emp.edad}
                                    </td>

                                    <td>
                                        {emp.parentesco}
                                    </td>   
                                </tr>
                            ))}
                        </tbody>
                </table>

                <div className={Styles.pagination}>
                    <button onClick={goFirstPage} className={Styles.firsend} >  <img src={first} alt="first"/> </button>
                    <button onClick={prevPage}  className={Styles.pag} > <img src={back} alt="back"/> </button>
                    <button onClick={nextPage}  className={Styles.pag} > <img src={next} alt="next"/> </button>
                    <button onClick={goLastPage} className={Styles.pag} >  <img src={last} alt="last"/> </button>
                </div>

                </>
 
            )}
        
        </div>
    );
};