import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '.';

describe('Test <Header />', () => {
  test('Should render heading with the text "Controle Financeiro"', () => {
    // Arrange
    render(
      <Router>
        <Header />,
      </Router>
    );

    // Act
    const renderLogin = screen.getByRole('heading', {
      name: /Controle Financeiro/i,
    });

    // Assert
    expect(renderLogin).toBeInTheDocument();
  });

  test('Should render button with the text "Sair"', () => {
    // Arrange
    render(
      <Router>
        <Header />,
      </Router>
    );

    // Act
    const elButton = screen.getByRole('button', { name: /Sair/i });

    // Assert
    expect(elButton).toBeInTheDocument();
  });

  test('Should match snapshot', () => {
    // Arrange
    const { container } = render(
      <Router>
        <Header />,
      </Router>
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
