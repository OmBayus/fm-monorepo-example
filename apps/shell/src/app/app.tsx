import * as React from 'react';
import { useAppDispatch, increment, useAppSelector } from '@fm/store';
import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Workorder = React.lazy(() => import('workorder/Module'));

const Users = React.lazy(() => import('users/Module'));

const Asset = React.lazy(() => import('asset/Module'));

const Facility = React.lazy(() => import('facility/Module'));

export function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  return (
    <React.Suspense fallback={<div>loading..</div>}>
      <div>
        <h1>shell</h1>
        <button onClick={() => dispatch(increment())}>{counter}</button>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/workorder">Workorder</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/asset">Asset</Link>
        </li>
        <li>
          <Link to="/facility">Facility</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/workorder" element={<Workorder />} />
        <Route path="/users" element={<Users />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/facility" element={<Facility />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
