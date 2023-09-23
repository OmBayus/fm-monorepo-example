import styles from './button2.module.scss';

/* eslint-disable-next-line */
export interface Button2Props {}

export function Button2(props: Button2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Button2!</h1>
    </div>
  );
}

export default Button2;
