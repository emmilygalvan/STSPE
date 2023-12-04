import { ActionBar } from '../components/actionBar/ActionBar';
import { TableEmploye } from '../components/tableEmploye/TableEmploye';
import { Ins } from '../components/ins/Ins';
import { useState } from 'react';

export const EmployeesPage = () => {
    const [data, setData] = useState([]);
    return (
        <>
            <ActionBar setData={setData} > 
            <NewRegisterButton />
            </ActionBar>
            <TableEmploye  data={data} setData={setData}/>
        </>
    );
};
