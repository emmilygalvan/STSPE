import { useRef, useState } from 'react'
import Styles from './NavBarMenu.module.css'
import logo from '../../assets/logo.png'
import empleados from '../../assets/empleados.svg'
import usuario from '../../assets/usuario.svg'
import delegado from '../../assets/delegado.svg'
import { Link, useNavigate } from 'react-router-dom'

export const NavBarMenu = () => {

    const [open, setOpen] = useState(false);
    const navRef = useRef();

    const navigate = useNavigate();

    return (
        <div
        ref={navRef}
        className={ !open ? Styles.nav : Styles.nav__active }  onMouseOver={
            () => {
                if ( open ) {
                    return
                } else {
                    setOpen(true)
                }
            }
        }
            
        onMouseLeave={
            () => {
                if ( !open ) {
                    return
                } else {
                    setOpen(false)
                }
            }
        }
        >
            <img className={Styles.logo} src={logo} alt="logo" onClick={() => {
            navigate('/')
            }} />

            <div className={Styles.buttons}> 
                <button className={Styles.buttonsMenu}> <img src={empleados} alt="empleados" /> <Link to={'/empleados'}><p className={Styles.textButton}>Empleados</p></Link> </button>
                <button className={Styles.buttonsMenu}> <img src={usuario} alt="usuario" /><p className={Styles.textButton}>Usuarios</p></button>
                <button className={Styles.buttonsMenu}> <img src={delegado} alt="delegado" /><p className={Styles.textButton}>Delegados</p></button>
            </div>
        </div>
    )
}
