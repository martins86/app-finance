import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import FormTransactions from '../components/FormTransactions';

describe('Test <FormTransactions />', () => {
  test('Should match snapshot', () => {
    // Arrange
    const fn = jest.fn();
    const { container } = render(
      <Router>
        <FormTransactions handleAdd={fn} />
      </Router>
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
