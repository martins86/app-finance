import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaTrash,
} from 'react-icons/fa';

import './styles.css';

export interface TableParams {
  transactionList: any;
  setTransactionList: any;
}

const TableTransactions = ({
  transactionList,
  setTransactionList,
}: TableParams) => {
  const onDelete = (ID: any) => {
    const newArray = transactionList.filter(
      (transaction: any) => transaction.id !== ID
    );
    setTransactionList(newArray);
    localStorage.setItem('transactions', JSON.stringify(newArray));
  };
  return (
    <div className="table">
      <table data-testid="table-transactions" className="table-container">
        <thead>
          <tr className="table-titles">
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {transactionList?.map((item: any, index: any) => (
            <tr className="table-itens" key={index}>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
