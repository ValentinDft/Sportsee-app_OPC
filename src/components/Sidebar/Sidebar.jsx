import styles from './Sidebar.module.scss';
import yogaLogo from '../../assets/img/yoga.png';
import natationLogo from '../../assets/img/natation.png';
import veloLogo from '../../assets/img/velo.png';
import musculationLogo from '../../assets/img/musculation.png';
import CardSport from './CardSport/CardSport.jsx';

const Sidebar = () => {
  return (
    <div className={styles['container']}>
      <CardSport img={yogaLogo} />
      <CardSport img={natationLogo} />
      <CardSport img={veloLogo} />
      <CardSport img={musculationLogo} />
      <small>Copyright, SportSee 2020</small>
    </div>
  );
};

export default Sidebar;
