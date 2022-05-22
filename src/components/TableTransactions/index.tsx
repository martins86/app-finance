import TableItem from './TableItem';

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
      <table className="table-container">
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
            <TableItem key={index} item={item} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
