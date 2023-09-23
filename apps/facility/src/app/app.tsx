// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { useAppDispatch, increment, useAppSelector } from '@fm/store';

export function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  return (
    <div>
      <div>
        <h1>Facility</h1>
        <button onClick={() => dispatch(increment())}>{counter}</button>
      </div>
      <NxWelcome title="facility" />
    </div>
  );
}

export default App;
