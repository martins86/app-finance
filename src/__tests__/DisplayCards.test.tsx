import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import DisplayCards from '../components/DisplayCards';

describe('Test <DisplayCards />', () => {
  test('Should match snapshot', () => {
    // Arrange
    const { container } = render(
      <Router>
        <DisplayCards />
      </Router>
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
