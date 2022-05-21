import './styles.css';

export interface InputParams {
    type?: string;
    id?: string;
    dataTestId?: string;
    className?: string;
    placeholder?: string;
    value?: string;
    min?: string;
    onChange?: any;
    onKeyDown?: any;
    autoComplete?: string;
    ariaRequired?: boolean;
    required?: boolean;
    disabled?: boolean;
}

const InputType = ({ type, id, dataTestId, className, placeholder, value, min, onChange, onKeyDown, autoComplete, ariaRequired, required, disabled }: InputParams) => {
    return (
        <input
            type={type}
            id={id}
            name={type}
            data-testid={dataTestId}
            className={className}
            placeholder={placeholder}
            value={value}
            min={min}
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