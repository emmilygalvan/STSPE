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

export const TableEmploye = ( { data, setData} ) => {
    
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
    
    const getStatusColorClass = (estatus) => {
        switch (estatus) {
          case 'activo':
            console.log('activo');
            return '#0AA932';
          case 'licencia':
            console.log('Licencia');
            return '#FFBD00';
          case 'baja':
          case 'expulsado':
            console.log('Inactivo');
            return '#EE2D2E';
          case 'finado':
            console.log('Finado');
            return 'black';
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

                            <th>ID</th>
                            <th></th>
                            <th>Nombre</th>
                            <th>Dependencia</th>
                            <th>Puesto</th>
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
                                    <td className={Styles.id}>
                                        {i} 
                                    </td>
                                    <td  className={Styles.photo}> 
                                        <div className={Styles.photoConteiner}> 
                                            <img src={emp.foto} alt="foto" />
                                        </div>
                                    </td>
                                    
                                    <td  className={Styles.name}>
                                        <div> {emp.nombre} {emp.apellidop} {emp.apellidom} </div>
                                    </td>

                                    <td className={Styles.dependencia}>
                                        {emp.dependencia}
                                    </td>

                                    <td>
                                        {emp.puesto}
                                    </td>
                                    
                                    <td className={Styles.estatus}>
                                        <span 
                                            style={{
                                                display: 'inline-block',
                                                width: '16px',
                                                height: '16px',
                                                borderRadius: '50%',
                                                marginRight: '8px',
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