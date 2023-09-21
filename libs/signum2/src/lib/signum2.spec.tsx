import { render } from '@testing-library/react';

import Signum2 from './signum2';

describe('Signum2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Signum2 />);
    expect(baseElement).toBeTruthy();
  });
});
