import './styles.css';

export interface InputParams {
    type?: string;
    dataTestId?: string;
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: any;
    onKeyDown?: any;
    autoComplete?: string;
    ariaRequired?: boolean;
    required?: boolean;
    disabled?: boolean;
}

const InputType = ({ type, dataTestId, className, placeholder, value, onChange, onKeyDown, autoComplete, ariaRequired, required, disabled }: InputParams) => {
    return (
        <input
            type={type}
            name={type}
            data-testid={dataTestId}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoComplete={autoComplete}
            aria-label={placeholder}
            aria-required={ariaRequired}
            required={required}
            disabled={disabled}
        />
    );
};

export default InputType;