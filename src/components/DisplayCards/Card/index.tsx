import './styles.css';

export interface CardParams {
    titleCard?: string;
    Icon?: any;
    iconColor?: string;
    value?: number;
}

const Card = ({ titleCard, Icon, iconColor, value }: CardParams) => {
    return (
        <div className="card">
            <header className="card-header">
                <h4 className="card-title">{titleCard}</h4>
                <Icon color={iconColor} />
            </header>
            <h5 className="total">
                {value?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </h5>
        </div>
    );
};

export default Card;