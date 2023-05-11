import styles from './Sidebar.module.scss';
// import yogaLogo from '../../assets/img/yoga.png';
// import natationLogo from '../../assets/img/natation.png';
// import veloLogo from '../../assets/img/velo.png';
// import musculationLogo from '../../assets/img/musculation.png';
import CardSport from './CardSport/CardSport.jsx';

const Sidebar = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['container-card']}>
        <CardSport img={`/images/icon/yoga.png`} />
        <CardSport img={`/images/icon/natation.png`} />
        <CardSport img={`/images/icon/velo.png`} />
        <CardSport img={`/images/icon/musculation.png`} />
      </div>
      <div className={styles['oui']}>
        <small>Copyright, SportSee 2020</small>
      </div>
    </div>
  );
};

export default Sidebar;
