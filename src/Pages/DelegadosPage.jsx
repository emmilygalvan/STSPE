import { ActionBar } from '../components/simpleActionBar/ActionBar';
import { TableDelegado } from '../components/tableDelegado/TableDelegado';
import { useState } from 'react';

export const DelegadosPage = () => {
    const [data, setData] = useState([]);
    return (
        <>
            <ActionBar setData={setData} />
            <TableDelegado  data={data} setData={setData}/>
        </>
    );
};
