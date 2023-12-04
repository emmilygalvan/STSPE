import { Flex } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import back from "../assets/back.svg";
import Styles from "./styles/EmployeeDetail.module.css";

import QRCode from "react-qr-code";

export const EmployeeDetail = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const { id, nombre, apellidop, apellidom, fotoempleado } = state;

  return (
    <div className={Styles.container}>
      <div className={Styles.screenActions}>

        <div className={Styles.screenName}>
          <img
            src={back}
            alt="back"
            className={Styles.back}
            onClick={() => {
              navigate("/empleados");
            }}
          />
          <p className={Styles.screenTitle}> <p>{nombre}</p><p>{apellidop}</p><p>{apellidom}</p></p>
        </div>

        <div className={Styles.buttonss}>
          
          <button className={Styles.printButton}>
            Credencial
          </button>

          <button className={Styles.editButton}
            onClick={() => {
              navigate("/editEmpleado", {
                state,
              });
            }}
          >
            Editar
          </button>
        </div>
        
      </div>
      

      <div className={Styles.QR}>
        <QRCode value={id} 
        style={{
          width: '128px',
          marginTop: '0px',
          paddingTop: '0px',
          backgroundColor: 'blue',
        }}/>
      </div>
      
      
      <img src={`./images/${fotoempleado}`} alt="foto" />
      <p>{fotoempleado}</p>
      
    </div>
  );
};
