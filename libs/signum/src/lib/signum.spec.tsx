import { render } from '@testing-library/react';

import Signum from './signum';

describe('Signum', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Signum />);
    expect(baseElement).toBeTruthy();
  });
});
