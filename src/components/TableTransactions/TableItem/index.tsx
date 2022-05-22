import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaTrash,
} from 'react-icons/fa';

import './styles.css';

export interface TableItemParams {
  item: any;
  onDelete: any;
}

const TableItem = ({ item, onDelete }: TableItemParams) => {
  return (
    <tr className="table-itens">
      <td>{item.desc}</td>
      <td>
        {Number(item.amount)?.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </td>
      <td>
        {item.expense ? (
          <FaRegArrowAltCircleDown title="Saída" color="red" />
        ) : (
          <FaRegArrowAltCircleUp title="Entrada" color="royalblue" />
        )}
      </td>
      <td>
        <FaTrash
          title="Remover item"
          onClick={() => onDelete(item.id)}
          color="gray"
        />
      </td>
    </tr>
  );
};

export default TableItem;
