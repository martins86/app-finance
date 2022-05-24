import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

import InputType from '../components/InputType';

describe('Test <InputType />', () => {
  test('Should have a value of InputTextValue', () => {
    // Arrange
    const fn = jest.fn();
    render(
      <Router>
        <InputType
          type="text"
          dataTestId="teste-id"
          onChange={fn}
          placeholder="Any Text"
          value="Any Value"
        />
      </Router>
    );

    // Act
    const elInputText: HTMLInputElement =
      screen.getByPlaceholderText(/Any Text/i);

    // Assert
    expect(elInputText.value).toBe('Any Value');
  });

  test('Should call onChange function on each key pressed', () => {
    // Arrange
    const fn = jest.fn();
    render(
      <Router>
        <InputType
          type="text"
          dataTestId="teste-id"
          onChange={fn}
          placeholder="Any Text"
        />
      </Router>
    );

    // Act
    const elInputText: HTMLInputElement =
      screen.getByPlaceholderText(/Any Text/i);
    const valueOnInput = 'Any Value';

    userEvent.type(elInputText, valueOnInput);

    // Assert
    expect(elInputText.value).toBe(valueOnInput);
    expect(fn).toHaveBeenCalledTimes(9);
  });

  test('Should match snapshot', () => {
    // Arrange
    const fn = jest.fn();
    const { container } = render(
      <Router>
        <InputType
          type="any type"
          id="any id"
          nameField="any name"
          dataTestId="any testid"
          className="any className"
          placeholder="any placeholder"
          value="any value"
          min="any min"
          onChange={fn}
          onKeyDown={fn}
          autoComplete="on"
          aria-label="any id"
          aria-required
          required
          disabled
          defaultChecked
        />
      </Router>
    );

    // Act & Assert
    expect(container).toMatchSnapshot();
  });
});
