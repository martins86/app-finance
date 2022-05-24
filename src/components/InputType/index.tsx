import './styles.css';

export interface InputParams {
  type: string;
  id?: string;
  nameField?: string;
  dataTestId: string;
  className?: string;
  placeholder?: string;
  value?: string;
  min?: string;
  onChange?: any;
  onKeyDown?: any;
  autoComplete?: string;
  ariaRequired?: boolean;
  ariaLabel?: string;
  defaultChecked?: boolean;
  required?: boolean;
  disabled?: boolean;
}

const InputType = ({
  type,
  id,
  nameField,
  dataTestId,
  className,
  placeholder,
  value,
  min,
  onChange,
  onKeyDown,
  autoComplete,
  ariaRequired,
  ariaLabel,
  required,
  disabled,
  defaultChecked,
}: InputParams) => {
  return (
    <input
      type={type}
      id={id}
      name={nameField}
      data-testid={dataTestId}
      className={className}
      placeholder={placeholder}
      value={value}
      min={min}
      onChange={onChange}
      onKeyDown={onKeyDown}
      autoComplete={autoComplete}
      aria-label={ariaLabel}
      aria-required={ariaRequired}
      required={required}
      disabled={disabled}
      defaultChecked={defaultChecked}
    />
  );
};

export default InputType;
