import { useRef, useState } from 'react'
import Styles from './NavBarMenu.module.css'
import logo from '../../assets/logo.png'
import empleados from '../../assets/empleados.svg'
import usuario from '../../assets/usuario.svg'
import delegado from '../../assets/delegado.svg'
import { Link } from 'react-router-dom'

export const NavBarMenu = () => {

    const [open, setOpen] = useState(false);
    const navRef = useRef();

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
            <img className={Styles.logo} src={logo} alt="logo" />

            <div className={Styles.buttons}> 
                <button className={Styles.buttonsMenu}> <img src={empleados} alt="empleados" /> <Link to={'/empleados'} >Empleados</Link> </button>
                <button className={Styles.buttonsMenu}> <img src={usuario} alt="usuario" /> Usuarios </button>
                <button className={Styles.buttonsMenu}> <img src={delegado} alt="delegado" /> Delegados </button>
            </div>
        </div>
    )
}
