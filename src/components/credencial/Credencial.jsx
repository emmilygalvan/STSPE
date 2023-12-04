import Styles from './Credencial.module.css';
import logo from '../../assets/logo2.png'

export const Credencial = () => {
  return (
    <div className={Styles.conteiner}>
      <div className={Styles.crendencial}>
        <div className={Styles.header}>
            <img className={Styles.logo} src={logo} alt="logo"/>
            <div className={Styles.stspe}> 
                <p className={Styles.stspeName}><b>Sindicato de Trabajadores a Servicio de los Poderes del Estado</b></p>
                <p className={Styles.comite}>Comité Ejecutivo 2023-2026</p>
            </div>
        </div>
        <div className={Styles.body}>
            <div className={Styles.nameandLogo}>
                <div className={Styles.name}>
                    <p>Nombre</p>
                    <p>Apellido</p>
                    <p>Apellido</p>
                </div>
                <img className={Styles.logoFondo} src={logo} alt="logo"/>        
            </div>
        </div>
      </div>
    </div>
  )
}