import { render, screen } from '@testing-library/react';

import App from '../pages/app';

describe('Test <App />', () => {
  test('Should render App correctly with text "SISTEMA DE LOGIN"', () => {
    render(<App />);

    const text = screen.getByText('SISTEMA DE LOGIN');

    expect(text).toBeInTheDocument();
  });

  test('Should match snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
