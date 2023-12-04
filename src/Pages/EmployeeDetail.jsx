import { Flex } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import back from '../assets/back.svg';

import QRCode from 'react-qr-code';

export const EmployeeDetail = () => {
    const { state } = useLocation();

    const navigate = useNavigate();

    const { id, nombre, apellidop, apellidom, fotoempleado } = state;

    return (
        <div
            style={{
                margin: '90px 40px 40px 120px',
                display: 'flex',
                height: '100vh',
                width: '1300px',
            }}
        >
            <div>
                <img src={back} alt="back" />
                <p>Registrar Sindicalizado</p>
            </div>

            <div>
                <QRCode value={id} />
            </div>
            <h2>{nombre}</h2>
            <h2>{apellidop}</h2>
            <h2>{apellidom}</h2>
            <img src={
                `./images/${fotoempleado}`
            } alt="foto" />
            <p>
                {fotoempleado}
            </p>
            <button
                style={{
                    background: '#FF8000',
                    border: 'none',
                    height: '32px',
                    width: '280px',
                    colo: 'white',
                }}
                onClick={() => {
                    navigate('/editEmpleado', {
                        state,
                    });
                }}
            >
                Editar
            </button>
        </div>
    );
};
