import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '.';

describe('Test <Button />', () => {
    test('Should render the button with the text "Any Text"', () => {
        // Arrange
        render(<Button text="Any Text" />);

        // Act
        const elButton = screen.getByRole('button', { name: /Any Text/i });

        // Assert
        expect(elButton).toBeInTheDocument();
        expect.assertions(1);
    });

    test('Should call function on button click', () => {
        // Arrange
        const fn = jest.fn();
        render(<Button text="Any Text" onClick={fn} />);

        // Act
        const elButton = screen.getByRole('button', { name: /Any Text/i });
        userEvent.click(elButton);

        // Assert
        expect(fn).toBeCalledTimes(1);
    });

    test('Should be disabled when disabled is true', () => {
        // Arrange
        render(<Button text="Any Text" disabled={true} />);

        // Act
        const elButton = screen.getByRole('button', { name: /Any Text/i });

        // Assert
        expect(elButton).toBeDisabled();
    });

    test('Should be enabled when disabled is false', () => {
        // Arrange
        render(<Button text="Any Text" disabled={false} />);

        // Act
        const elButton = screen.getByRole('button', { name: /Any Text/i });

        // Assert
        expect(elButton).toBeEnabled();
    });

    test('Should be enabled when disabled send', () => {
        // Arrange
        render(<Button text="Any Text" />);

        // Act
        const elButton = screen.getByRole('button', { name: /Any Text/i });

        // Assert
        expect(elButton).toBeEnabled();
    });
});
