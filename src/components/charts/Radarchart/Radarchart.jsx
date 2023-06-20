import styles from './Radarchart.module.scss';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

const Radarchart = ({ data }) => {
  const legend = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];
  const newData = [];
  data?.map((item, index) => {
    newData.push({ ...item, legend: legend[index] });
  });

  return (
    <div className={styles['container']}>
      <ResponsiveContainer width={'100%'} height={230}>
        <RadarChart data={newData}>
          <PolarGrid gridType='polygon' radialLines={false} />
          <PolarAngleAxis
            dataKey='legend'
            tick={{ fill: 'white', fontSize: 7, fontWeight: 500 }}
          />
          <Radar
            name='session'
            dataKey='value'
            fill='#FF0101'
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

Radarchart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Radarchart;
