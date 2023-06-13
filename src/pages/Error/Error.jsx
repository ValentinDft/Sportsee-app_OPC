import styles from './Error.module.scss';

const Error = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['container-logo']}>
        <img src={`/images/icon/logo.png`} alt='logo' />
        <h1>SportSee</h1>
      </div>
    </div>
  );
};

export default Error;
