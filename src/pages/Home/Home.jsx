import './Home.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import styles from './Home.module.scss';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  getUsersInfoWithAxios,
  getUsersActivityWithAxios,
  getUsersAverageSessionsWithAxios,
  getUsersPerformanceWithAxios,
} from '../../services/apiServicesAxios.js';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../assets/mock/data';

function Home({ userId }) {
  const [infoUser, setInfoUser] = useState({});
  const [activityUser, setActivityUser] = useState([]);
  const [averageSessionUser, setAverageSessionUser] = useState([]);
  const [performanceUser, setPerformanceUser] = useState([]);
  const [msgError, setMsgError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getUsersInfoWithAxios(userId || id).then((data) => {
      if (data.message) {
        setMsgError(data.message);
      } else {
        setMsgError('');
        setInfoUser(data);
      }
    });
    getUsersActivityWithAxios(userId || id).then((data) => {
      if (data.message) {
        setMsgError(data.message);
      } else {
        setMsgError('');
        setActivityUser(data.sessions);
      }
    });
    getUsersAverageSessionsWithAxios(userId || id).then((data) => {
      if (data.message) {
        setMsgError(data.message);
      } else {
        setMsgError('');
        setAverageSessionUser(data.sessions);
      }
    });
    getUsersPerformanceWithAxios(userId || id).then((data) => {
      if (data.message) {
        setMsgError(data.message);
      } else {
        setMsgError('');
        setPerformanceUser(data.data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUseMockData = (id) => {
    USER_MAIN_DATA.map((user) => {
      user.id === id && setInfoUser(user);
    });
    USER_ACTIVITY.map((activity) => {
      activity.userId === id && setActivityUser(activity.sessions);
    });
    USER_AVERAGE_SESSIONS.map((session) => {
      session.userId === id && setAverageSessionUser(session.sessions);
    });
    USER_PERFORMANCE.map((performance) => {
      performance.userId === id && setPerformanceUser(performance.data);
    });
    setMsgError('');
  };

  return (
    <div className={styles['layout']}>
      <Sidebar />
      {msgError.length === 0 ? (
        <Dashboard
          info={infoUser}
          activity={activityUser}
          session={averageSessionUser}
          performance={performanceUser}
        />
      ) : (
        <div className={styles['layout-error']}>
          <h2>{msgError}</h2>
          <span>Use Mock data : </span>
          <div className={styles['layout-error-button']}>
            <button onClick={() => handleUseMockData(12)}>Karl</button>
            <button onClick={() => handleUseMockData(18)}>Cecilia</button>
          </div>
        </div>
      )}
    </div>
  );
}

Home.propTypes = {
  userId: PropTypes.number,
};

export default Home;
