import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom"


export const EmployeeDetail = () => {

    const { state } = useLocation();

    const { id, nombre, apellidoP, apellidoM, } = state;

    console.log(nombre, apellidoP, apellidoM,  );

  return (
    <div
        style={{
            margin: '90px 40px 40px 120px',
            display: 'flex',
            height: '100vh',
            width: '1300px'
        }}
    >
        <h1
            style={{
                background:'red'
            }}
        >
            { id }
        </h1>
        <h2>
            {
                nombre.nombre
            }
        </h2>
        <h2>
            {
                nombre.apellidoP
            }
        </h2>
        <h2>
            {
                nombre.apellidoM
            }
        </h2>
    </div>
  )
}
