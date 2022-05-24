import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../components/Button';

describe('Test <Button />', () => {
  test('Should render the button with the text "Any Text"', () => {
    // Arrange
    render(<Button text="Any Text" className="any-class-style" />);

    // Act
    const elButton = screen.getByRole('button', { name: /Any Text/i });

    // Assert
    expect(elButton).toBeInTheDocument();
  });

  test('Should call function on button click', () => {
    // Arrange
    const fn = jest.fn();
    render(<Button text="Any Text" onClick={fn} className="any-class-style" />);

    // Act
    const elButton = screen.getByRole('button', { name: /Any Text/i });
    userEvent.click(elButton);

    // Assert
    expect(fn).toBeCalledTimes(1);
  });

  test('Should not call function on button click when disabled is true', () => {
    // Arrange
    const fn = jest.fn();
    render(
      <Button
        text="Any Text"
        onClick={fn}
        disabled={true}
        className="any-class-style"
      />
    );

    // Act
    const elButton = screen.getByRole('button', { name: /Any Text/i });
    userEvent.click(elButton);

    // Assert
    expect(fn).not.toBeCalled();
  });

  test('Should be disabled when disabled is true', () => {
    // Arrange
    render(
      <Button text="Any Text" disabled={true} className="any-class-style" />
    );

    // Act
    const elButton = screen.getByRole('button', { name: /Any Text/i });

    // Assert
    expect(elButton).toBeDisabled();
  });

  test('Should be enabled when disabled is false', () => {
    // Arrange
    render(
      <Button text="Any Text" disabled={false} className="any-class-style" />
    );

    // Act
    const elButton = screen.getByRole('button', { name: /Any Text/i });

    // Assert
    expect(elButton).toBeEnabled();
  });

  test('Should match snapshot', () => {
    // Arrange
    const fn = jest.fn();
    const { container } = render(
      <Button
        text="Any Text"
        onClick={fn}
        disabled={false}
        className="any-class-style"
      />
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
