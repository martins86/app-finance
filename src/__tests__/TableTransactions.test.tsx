import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import TableTransactions from '../components/FormTransactions';

describe('Test <TableTransactions />', () => {
  test('Should match snapshot', () => {
    // Arrange
    const fn = jest.fn();
    const transactionList = [''];
    const { container } = render(
      <Router>
        <TableTransactions
          transactionList={transactionList}
          setTransactionList={fn}
        />
      </Router>
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
