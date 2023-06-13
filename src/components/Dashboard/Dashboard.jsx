import BarChart from '../charts/BarChart/Barchart.jsx';
import CardKeyData from '../CardKeyData/CardKeyData.jsx';
import styles from './Dashboard.module.scss';
import PropTypes from 'prop-types';
import Linechart from '../charts/Linechart/Linechart.jsx';
import Radarchart from '../charts/Radarchart/Radarchart.jsx';
import RadialBarchart from '../charts/RadialBarchart/RadialBarchart.jsx';

const Dashboard = ({ info, activity, session, performance }) => {
  return (
    <div className={styles['container']}>
      <h1>
        Bonjour <span>{info.userInfos?.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className={styles['container-charts']}>
        <div>
          <BarChart data={activity} />
          <div className={styles['container-min-charts']}>
            <Linechart data={session} />
            <Radarchart data={performance} />
            <RadialBarchart score={info.todayScore || info.score} />
          </div>
        </div>
        <div className={styles['container-list-keyData']}>
          {info?.keyData && (
            <CardKeyData
              id={'Calories'}
              data={info.keyData?.calorieCount}
              unit='kCal'
            />
          )}
          {info?.keyData && (
            <CardKeyData
              id={'Proteines'}
              data={info.keyData?.proteinCount}
              unit='g'
            />
          )}
          {info?.keyData && (
            <CardKeyData
              id={'Glucides'}
              data={info.keyData?.carbohydrateCount}
              unit='g'
            />
          )}
          {info?.keyData && (
            <CardKeyData
              id={'Lipides'}
              data={info.keyData?.lipidCount}
              unit='g'
            />
          )}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  info: PropTypes.object.isRequired,
  activity: PropTypes.array.isRequired,
  session: PropTypes.array.isRequired,
  performance: PropTypes.array.isRequired,
};

export default Dashboard;
