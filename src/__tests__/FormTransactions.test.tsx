import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import FormTransactions from '../components/FormTransactions';

describe('Test <FormTransactions />', () => {
  test('Should render FormTransactions with three inputs', () => {
    // Arrange
    render(
      <Router>
        <FormTransactions />
      </Router>
    );

    // Act
    const elInputText = screen.getByPlaceholderText(/Digite a descrição/i);
    const elInputNumber = screen.getByPlaceholderText(/Digite o valor/i);
    const elInputRadioOne = screen.getByTestId('radio-income');
    const elInputRadioTwo = screen.getByTestId('radio-expenses');

    // Assert
    expect(elInputText).toBeInTheDocument();
    expect(elInputNumber).toBeInTheDocument();
    expect(elInputRadioOne).toBeInTheDocument();
    expect(elInputRadioTwo).toBeInTheDocument();
  });

  test('Should render FormTransactions with one button "Adicionar"', () => {
    // Arrange
    const fn = jest.fn();
    render(
      <Router>
        <FormTransactions handleAdd={fn} />
      </Router>
    );

    // Act
    const elButton = screen.getByRole('button', { name: /Adicionar/i });

    // Assert
    expect(elButton).toBeInTheDocument();
  });

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
