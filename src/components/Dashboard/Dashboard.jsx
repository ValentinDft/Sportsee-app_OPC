import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles['container']}>
      <h1>Bonjour $</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Dashboard;
