import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import InputType from '../components/InputType';

describe('Test <InputType />', () => {
  test('Should match snapshot', () => {
    // Arrange
    const { container } = render(
      <Router>
        <InputType />,
      </Router>
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
