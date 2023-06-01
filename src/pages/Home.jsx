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
  getUsersPerformanceWithAxios,
} from '../services/apiServicesAxios.js';

function Home({ userId }) {
  const [infoUser, setInfoUser] = useState({});
  const [activityUser, setActivityUser] = useState([]);
  const [averageSessionUser, setAverageSessionUser] = useState([]);
  const [performanceUser, setPerformanceUser] = useState([]);

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
    getUsersPerformanceWithAxios(userId)
      .then((data) => {
        setPerformanceUser(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles['layout']}>
      <Sidebar />
      {infoUser && (
        <Dashboard
          info={infoUser}
          activity={activityUser}
          session={averageSessionUser}
          performance={performanceUser}
        />
      )}
    </div>
  );
}

Home.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Home;
