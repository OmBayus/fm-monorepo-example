import styles from './signum2.module.scss';

/* eslint-disable-next-line */
export interface Signum2Props {}

export function Signum2(props: Signum2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Signum2!</h1>
    </div>
  );
}

export default Signum2;
