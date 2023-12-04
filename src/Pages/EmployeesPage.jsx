import { ActionBar } from '../components/actionBar/ActionBar';
import { TableEmploye } from '../components/tableEmploye/TableEmploye';
import { useState } from 'react';

export const EmployeesPage = () => {
    const [data, setData] = useState([]);
    return (
        <>
            <ActionBar setData={setData} title={('Sindicalizados')} />
            <TableEmploye  data={data} setData={setData}/>
        </>
    );
};
