import styles from './CardSport.module.scss';
import PropTypes from 'prop-types';

const CardSport = ({ img }) => {
  CardSport.propTypes = {
    img: PropTypes.string,
  };

  return (
    <div className={styles['card-sport']}>
      <img src={img} alt="yoga" />
    </div>
  );
};

export default CardSport;
