import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  title: string;
}

export function Button(props: ButtonProps) {
  return (
    <div className={styles['container']}>
      <button>{props.title}</button>
    </div>
  );
}

export default Button;
