import styles from './RadialBarchart.module.scss';
import { PieChart, Pie } from 'recharts';

const RadialBarchart = ({ score }) => {
  const data = [{ score: score * 100 }];
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <p>Score</p>
      </div>

      <PieChart width={250} height={180}>
        <Pie
          data={data}
          dataKey='score'
          startAngle={90}
          endAngle={430 * score + 70}
          innerRadius={'60%'}
          outerRadius={'70%'}
          cornerRadius={50}
          fill='#E60000'
        />
      </PieChart>

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
