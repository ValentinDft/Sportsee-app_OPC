import styles from './RadialBarchart.module.scss';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const RadialBarchart = ({ score }) => {
  const data = [{ score: score * 100 }];
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <p>Score</p>
      </div>

      <ResponsiveContainer width={'100%'} height={180}>
        <PieChart>
          <Pie
            data={data}
            dataKey='score'
            startAngle={90}
            endAngle={360 * score + 90}
            innerRadius={'70%'}
            outerRadius={'80%'}
            cornerRadius={50}
            fill='#E60000'
          />
        </PieChart>
      </ResponsiveContainer>

      <div className={styles['container-score']}>
        <p>
          {data[0].score}% <br />
          <span>
            de votre <br /> objectif
          </span>
        </p>
      </div>
    </div>
  );
};

export default RadialBarchart;
