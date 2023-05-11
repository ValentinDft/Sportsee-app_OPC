import PropTypes from 'prop-types';
import styles from './CardKeyData.module.scss';

const CardKeyData = ({ id, data, unit }) => {
  return (
    <div className={styles['container']}>
      <img src={`/images/icon/${id}-icon.png`} alt={`${id}-icon`} />
      <div className={styles['container-data']}>
        <h4>
          {data}
          {unit}
        </h4>
        <span>{id}</span>
      </div>
    </div>
  );
};

CardKeyData.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default CardKeyData;
