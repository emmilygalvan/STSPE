import Styles from './Credencial.module.css';
import logo from '../../assets/logo2.png'

export const Credencial = () => {
  return (
    <div className={Styles.conteiner}>
      <div className={Styles.crendencial}>
        <div className={Styles.header}>
            <img className={Styles.logo} src={logo} alt="logo" onClick={() => {
            navigate('/')
            }} />

            <p>Sindicato de Trabajadores a Servicio de los Poderes del Estado</p>
            <p>Comité Ejecutivo 2023-2026</p>
        </div>
      </div>
    </div>
  )
}