import { Flex } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import back from '../assets/back.svg';
import Styles from './styles/EmployeeDetail.module.css';

import QRCode from 'react-qr-code';

export const EmployeeDetail = () => {

    const { state } = useLocation();

    const navigate = useNavigate();

    const { id, 
            nombre, 
            apellidop, 
            apellidom, 
            fechanacimiento, 
            lugarnacimiento, 
            genero, 
            nacionalidad,
            curp, 
            rfc, 
            nss, 
            escolaridad, 
            estadocivil,  
            fotoempleado, 
            calle,
            numerointerior,
            numeroexterior,
            colonia,
            codigopostal,
            estado,
            municipio,
            telefono,
            celular,
            mail,
            tipodependencia,
            dependencia,
            plantel,
            fechaingreso,
            fechasolicitud,
            fechaingresostspe,
            sueldo,
            puesto,
            horaentrada,
            horasalida,
            municipioqueretaro,
            estatus,
        } = state;

    return (
        <div className={Styles.container}>

            <div className={Styles.screenActions}>
                <div className={Styles.screenName}>
                    <img
                        src={back}
                        alt="back"
                        className={Styles.back}
                        onClick={() => {
                            navigate('/empleados');
                        }}
                    />
                    <p className={Styles.screenTitle}>
                        {' '}
                        <p>{nombre}</p>
                        <p>{apellidop}</p>
                        <p>{apellidom}</p>
                    </p>
                </div>

                <div className={Styles.buttonss}>
                    <button className={Styles.printButton}>Credencial</button>

                    <button
                        className={Styles.editButton}
                        onClick={() => {
                            navigate('/editEmpleado', {
                                state,
                            });
                        }}
                    >
                        Editar
                    </button>
                </div>
            </div>

            <div className={Styles.infoEmployee}>
                <h1 className={Styles.title}>Datos Personales</h1>
                <div className={Styles.datospcol}>
                    <div className={Styles.columna}>
                        <div className={Styles.dato}>
                            {' '}
                            <p><b>Nombre: </b></p>
                            <p>{nombre}</p>
                            <p>{apellidop}</p>
                            <p>{apellidom}</p>
                        </div>
                        <div className={Styles.dato}>
                            {' '}
                            <p><b>Fecha de Nacimiento: </b></p>
                            <p>{fechanacimiento}</p>
                        </div>
                        <div className={Styles.dato}>
                            {' '}
                            <p><b>Lugar de Nacimiento: </b></p>
                            <p>{lugarnacimiento}</p>
                        </div>
                        <div className={Styles.dato}>
                            {' '}
                            <p><b>Genero: </b></p>
                            <p>{genero}</p>
                        </div>
                        <div className={Styles.dato}>
                            {' '}
                            <p><b>Nacionalidad: </b></p>
                            <p>{nacionalidad}</p>
                        </div>
                        <div className={Styles.dato}>
                            {' '}
                            <p><b>CURP: </b></p>
                            <p>{curp}</p>
                        </div>
                        <div className={Styles.dato}>
                            {' '}
                            <p><b>RFC</b></p>
                            <p>{rfc}</p>
                        </div>
                        <div className={Styles.dato}>
                            {' '}
                            <p><b>NSS: </b></p>
                            <p>{nss}</p>
                        </div>
                        <div className={Styles.dato}>
                            {' '}
                            <p><b>Escolaridad: </b></p>
                            <p>{escolaridad}</p>
                        </div>
                        <div className={Styles.dato}>
                            {' '}
                            <p><b>Estado Civil: </b></p>
                            <p>{estadocivil}</p>
                        </div>
                    </div>
                    
                    <div className={Styles.columna}>
                        <div className={Styles.photoContainer}>
                            <img className={Styles.fotoempleado} src={`./images/${fotoempleado}`} alt="foto" /> 
                            <QRCode
                                value={id}
                                style={{
                                    width: '128px',
                                    height: '128px',
                                    marginTop: '0px',
                                    paddingTop: '0px',
                                    display: 'none',
                                }}
                            />
                        </div> 
                    </div>
                </div>
                
                <h1 className={Styles.title}>Contacto</h1>
                <div className={Styles.datosp}>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Calle: </b></p>
                        <p>{calle}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Numero Int: </b></p>
                        <p>{numerointerior}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Numero Exterior: </b></p>
                        <p>{numeroexterior}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Colonia: </b></p>
                        <p>{colonia}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Codigo Postal: </b></p>
                        <p>{codigopostal}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Estado: </b></p>
                        <p>{estado}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Municipio</b></p>
                        <p>{municipio}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Telefono: </b></p>
                        <p>{telefono}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Celular: </b></p>
                        <p>{celular}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Correo: </b></p>
                        <p>{mail}</p>
                    </div>
                </div>

                <h1 className={Styles.title}>Informacion del Empleo</h1>
                <div className={Styles.datosp}>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Tipo de Dependencia: </b></p>
                        <p>{tipodependencia}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Dependencia: </b></p>
                        <p>{dependencia}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Plantel: </b></p>
                        <p>{plantel}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Fecha de Ingreso: </b></p>
                        <p>{fechaingreso}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Fecha de Solicitud: </b></p>
                        <p>{fechasolicitud}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Fecha de Ingreso al STSPE: </b></p>
                        <p>{fechaingresostspe}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Puesto: </b></p>
                        <p>{puesto}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b> Region </b></p>
                        <p>{municipioqueretaro}</p>
                    </div>
                    <div className={Styles.dato}>
                        {' '}
                        <p><b>Estatus: </b></p>
                        <p>{estatus}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
