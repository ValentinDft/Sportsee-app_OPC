import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styles from './Barchart.module.scss';
import PropTypes from 'prop-types';

const Barchart = ({ data }) => {
  let activityArray = [];

  const extratDayofDate = (date) => {
    const dateObj = new Date(date);
    const nbDay = dateObj.getDate();
    return nbDay;
  };

  data.map((item) => {
    const object = { ...item, nbDay: extratDayofDate(item.day) };
    activityArray.push(object);
  });

  return (
    <div className={styles['container']}>
      <div className={styles['header-chart']}>
        <p>Activité quotidienne</p>
        <div className={styles['legend']}>
          <span>
            <div className={styles['legend-bullet_kg']}></div> Poids (kg)
          </span>
          <span>
            <div className={styles['legend-bullet_kcal']}></div> Calories
            brûlées (kCal)
          </span>
        </div>
      </div>

      <ResponsiveContainer width={'100%'} height={180}>
        <BarChart data={activityArray}>
          <CartesianGrid
            strokeDasharray='2 2'
            stroke='#DEDEDE'
            vertical={false}
            width={620}
            height={200}
          />
          <XAxis
            dataKey='nbDay'
            axisLine={false}
            tickLine={false}
            padding={{ right: 20 }}
            tick={{ stroke: '#9B9EAC', fontSize: '14px', fontWeight: '500' }}
          />
          <YAxis
            dataKey='calories'
            orientation='left'
            hide={true}
            yAxisId='right'
            domain={['auto', 'dataMax']}
          />
          <YAxis
            orientation='right'
            axisLine={false}
            tickLine={false}
            type='number'
            domain={['dataMin - 1', 'dataMax + 1']}
            dataKey='kilogram'
            tick={{ stroke: '#9B9EAC', fontSize: '14px', fontWeight: '500' }}
            allowDecimals={false}
            yAxisId='left'
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey='kilogram'
            fill='#282D30'
            barSize={10}
            radius={[20, 20, 0, 0]}
            id='Poids (kg)'
            yAxisId='left'
            animationDuration={1500}
            animationEasing='ease-out'
          />
          <Bar
            dataKey='calories'
            fill='#E60000'
            barSize={10}
            radius={[20, 20, 0, 0]}
            id='Calories brûlées (kCal)'
            yAxisId='right'
            animationDuration={1500}
            animationEasing='ease-out'
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

Barchart.propTypes = {
  data: PropTypes.array.isRequired,
};

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className={styles['tooltip']}>
        <span>{payload[0].value}Kg</span>
        <span>{payload[1].value}Kcal</span>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default Barchart;
