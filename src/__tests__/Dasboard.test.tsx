import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Dashboard from '../pages/dashboard';

describe('Test <Dashboard />', () => {
  test('Should render Header with the text "Controle Financeiro"', () => {
    // Arrange
    render(
      <Router>
        <Dashboard />
      </Router>
    );

    // Act
    const elHeading = screen.getByRole('heading', {
      name: /Controle Financeiro/i,
    });

    // Assert
    expect(elHeading).toBeInTheDocument();
  });

  test('Should render DisplayCards with the Card "Entradas"', () => {
    // Arrange
    render(
      <Router>
        <Dashboard />
      </Router>
    );

    // Act & Assert
    expect(
      screen.getByRole('heading', {
        name: /Entradas/i,
      })
    ).toBeInTheDocument();
  });

  test('Should render FormTransactions with the input "Digite a descrição"', () => {
    // Arrange
    render(
      <Router>
        <Dashboard />
      </Router>
    );

    // Act
    const elInputText = screen.getByPlaceholderText(/Digite a descrição/i);

    // Assert
    expect(elInputText).toBeInTheDocument();
  });

  test('Should not render TableTransactions', () => {
    // Arrange
    render(
      <Router>
        <Dashboard />
      </Router>
    );

    // Act
    const elTable = screen.queryByTestId('table-transactions');

    // Assert
    expect(elTable).not.toBeInTheDocument();
  });

  test('Should match snapshot', () => {
    // Arrange
    const { container } = render(
      <Router>
        <Dashboard />
      </Router>
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
