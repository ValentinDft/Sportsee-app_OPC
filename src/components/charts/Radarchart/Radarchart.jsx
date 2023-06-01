import styles from './Radarchart.module.scss';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

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
      <RadarChart width={200} height={230} data={newData}>
        <PolarGrid gridType='polygon' radialLines={false} />
        <PolarAngleAxis
          dataKey='legend'
          tick={{ fill: 'white', fontSize: 12, fontWeight: 500 }}
        />
        <Radar
          name='session'
          dataKey='value'
          fill='#FF0101'
          fillOpacity={0.7}
        />
      </RadarChart>
    </div>
  );
};

Radarchart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Radarchart;
