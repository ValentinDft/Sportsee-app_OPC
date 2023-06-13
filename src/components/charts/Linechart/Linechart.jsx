import PropTypes from 'prop-types';
import styles from './Linechart.module.scss';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Linechart = ({ data }) => {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const newData = [];
  data?.map((item, index) => {
    newData.push({ ...item, day: days[index] });
  });

  return (
    <div className={styles['container']}>
      <div className={styles['header-chart']}>
        <p>Durée moyenne des sessions</p>
      </div>

      <LineChart width={230} height={100} data={newData}>
        <XAxis
          dataKey='day'
          axisLine={false}
          tickLine={false}
          tick={{
            fill: '#FFFFFF',
            fontSize: '12px',
            fontWeight: '500',
            opacity: 0.5,
          }}
          padding={{ right: 5, left: 5 }}
        />
        <YAxis
          dataKey='sessionLength'
          domain={['dataMin - 20', 'dataMax']}
          hide={true}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type='natural'
          dataKey='sessionLength'
          stroke='#FFFFFF'
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

Linechart.propTypes = {
  data: PropTypes.array.isRequired,
};

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className={styles['tooltip']}>
        <span>{payload[0].value} min</span>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default Linechart;
