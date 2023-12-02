import Styles from './Header.module.css';
import photo from '../../assets/photo.svg'

export const Header = () => {
  return (
      <header className={Styles.header}>
        <img className={Styles.userPhoto} src={photo} alt="photo" />
      
      </header>
  )
}