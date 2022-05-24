import Card from './Card';

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';

import './styles.css';

export interface DisplayCardsParams {
  income?: number;
  expense?: number;
  total?: number;
}

const DisplayCards = ({ income, expense, total }: DisplayCardsParams) => {
  return (
    <div className="display-cards">
      <Card
        titleCard="Entradas"
        Icon={FaRegArrowAltCircleUp}
        iconColor="royalblue"
        value={income}
      />
      <Card
        titleCard="Saídas"
        Icon={FaRegArrowAltCircleDown}
        iconColor="red"
        value={expense}
      />
      <Card
        titleCard="Total"
        Icon={FaDollarSign}
        iconColor="green"
        value={total}
      />
    </div>
  );
};

export default DisplayCards;
