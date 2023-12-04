import { ActionBar } from '../components/simpleActionBar/ActionBar';
import { TableDependiente } from '../components/tableDependiente/TableDependiente';
import { useState } from 'react';

export const DelegadosPage = () => {
    const [data, setData] = useState([]);
    return (
        <>
            <ActionBar setData={setData} />
            <TableDependiente data={data} setData={setData}/>
        </>
    );
};