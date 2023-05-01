import styles from './Topbar.module.scss';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['container-brand']}>
        <img src={logo} alt="logo" />
        <h1>SportSee</h1>
      </div>
      <nav>
        <NavLink to="/">
          <h2>Accueil</h2>
        </NavLink>
        <NavLink to="/profil">
          <h2>Profil</h2>
        </NavLink>
        <NavLink to="/settings">
          <h2>Réglages</h2>
        </NavLink>
        <NavLink to="/com">
          <h2>Communauté</h2>
        </NavLink>
      </nav>
    </div>
  );
};

export default Topbar;
