import './Home.module.scss';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import styles from './Home.module.scss';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import { getUsersActivity, getUsersInfo } from '../services/apiServices.js';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Home({ userId }) {
  const [infoUser, setInfoUser] = useState({});
  const [activityUser, setActivityUser] = useState([]);

  useEffect(() => {
    getUsersInfo(userId)
      .then((data) => {
        setInfoUser(data);
      })
      .catch((error) => {
        console.error(error);
      });

    getUsersActivity(userId)
      .then((data) => {
        setActivityUser(data.sessions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log('home', infoUser);

  return (
    <div className={styles['layout']}>
      <Sidebar />
      {infoUser && <Dashboard info={infoUser} activity={activityUser} />}
    </div>
  );
}

Home.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Home;
