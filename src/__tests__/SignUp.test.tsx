import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import SignUp from '../pages/sign-up';

describe('Test <SignUp />', () => {
  test('Should match snapshot', () => {
    // Arrange
    const { container } = render(
      <Router>
        <SignUp />,
      </Router>
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
