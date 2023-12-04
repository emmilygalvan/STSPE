import { ActionBar } from '../components/simpleActionBar/ActionBar';
import { TableDependiente } from '../components/tableDependiente/TableDependiente';
import { useState } from 'react';

export const DependientesPage = () => {
    const [data, setData] = useState([]);
    return (
        <>
            <ActionBar setData={setData} title={('Dependientes')} />
            <TableDependiente data={data} setData={setData}/>
        </>
    );
};
