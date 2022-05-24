import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import SignIn from '../pages/sign-in';

describe('Test <SignIn />', () => {
  test('Should match snapshot', () => {
    // Arrange
    const { container } = render(
      <Router>
        <SignIn />
      </Router>
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
