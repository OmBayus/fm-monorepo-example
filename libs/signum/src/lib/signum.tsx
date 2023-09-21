import styles from './signum.module.scss';

/* eslint-disable-next-line */
export interface SignumProps {}

export function Signum(props: SignumProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Signum!</h1>
    </div>
  );
}

export default Signum;
