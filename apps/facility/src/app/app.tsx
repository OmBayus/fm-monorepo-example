// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Button } from '@fm/signum';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <h1>facilitysa</h1>
      <Button title="merhaba"/>
      <NxWelcome title="facility" />
    </div>
  );
}

export default App;
