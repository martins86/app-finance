import { render } from '@testing-library/react';

import App from '.';

describe('Test <App />', () => {
  test('renders learn react link', () => {
    render(<App />);
    expect(1).toBe(1);
  });
});
