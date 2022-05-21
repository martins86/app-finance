import './styles.css';

export interface ButtonParams {
  className?: string;
  onClick?: any;
  disabled?: boolean;
  text?: string;
}

const Button = ({ className, onClick, disabled, text }: ButtonParams) => {
  return (
    <button
      type="button"
      data-testid="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
