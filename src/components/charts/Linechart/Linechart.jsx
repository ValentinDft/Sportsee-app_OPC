import PropTypes from 'prop-types';
import styles from './Linechart.module.scss';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Linechart = ({ data }) => {
  console.log('line', data);
  return (
    <div className={styles['container']}>
      <div className={styles['header-chart']}>
        <p>Durée moyenne des sessions</p>
      </div>

      <LineChart width={250} height={100} data={data}>
        <XAxis
          type="number"
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ stroke: '#FFFFFF', fontSize: '14px', fontWeight: '500', opacity: 0.5 }}
          domain={['dataMin', 'dataMax']}
          scale={'linear'}
          padding={{ right: 5, left: 5 }}
        />
        <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }}
        />
      </LineChart>
    </div>
  );
};

Linechart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Linechart;
