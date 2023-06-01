import './Home.module.scss';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import styles from './Home.module.scss';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getUsersInfoWithAxios,
  getUsersActivityWithAxios,
  getUsersAverageSessionsWithAxios,
} from '../services/apiServicesAxios.js';

function Home({ userId }) {
  const [infoUser, setInfoUser] = useState({});
  const [activityUser, setActivityUser] = useState([]);
  const [averageSessionUser, setAverageSessionUser] = useState([]);

  useEffect(() => {
    getUsersInfoWithAxios(userId)
      .then((data) => {
        setInfoUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
    getUsersActivityWithAxios(userId)
      .then((data) => {
        setActivityUser(data.sessions);
      })
      .catch((error) => {
        console.error(error);
      });
    getUsersAverageSessionsWithAxios(userId)
      .then((data) => {
        setAverageSessionUser(data.sessions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles['layout']}>
      <Sidebar />
      {infoUser && <Dashboard info={infoUser} activity={activityUser} session={averageSessionUser} />}
    </div>
  );
}

Home.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Home;
