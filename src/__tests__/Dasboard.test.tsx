import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Dashboard from '../pages/dashboard';

describe('Test <Dashboard />', () => {
  test('Should render heading with the text "Controle Financeiro"', () => {
    // Arrange
    render(
      <Router>
        <Dashboard />,
      </Router>
    );

    // Act
    const renderLogin = screen.getByRole('heading', {
      name: /Controle Financeiro/i,
    });

    // Assert
    expect(renderLogin).toBeInTheDocument();
  });

  test('Should match snapshot', () => {
    // Arrange
    const { container } = render(
      <Router>
        <Dashboard />,
      </Router>
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
