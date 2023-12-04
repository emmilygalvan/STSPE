import { ActionBar } from '../components/simpleActionBar/ActionBar';
import { TableDependiente } from '../components/tableDependiente/TableDependiente';
import { useState } from 'react';
import Styles from './styles/DependientesPage.module.css';

export const DependientesPage = () => {
    const [data, setData] = useState([]);
    return (
        <>
            <ActionBar setData={setData} />
            <TableDependiente data={data} setData={setData}/>
        </>
    );
};
