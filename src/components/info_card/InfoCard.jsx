import Styles from './InfoCard.module.css';

export const InfoCard = () => {
  return (
    <div className={Styles.container}>
       <div className={Styles.info__card}>
        <p className={Styles.nameCard}>Nombre</p>
        <p className={Styles.amount}>000</p>
      </div>
    </div>
  )
}