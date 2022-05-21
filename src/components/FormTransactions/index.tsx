import { useState } from 'react';

import Button from './../../components/Button';
import InputType from './../../components/InputType';

import './styles.css';

const FormTransactions = ({ handleAdd }: any) => {
  const [desc, setDesc] = useState();
  const [amount, setAmount] = useState();
  const [isExpense, setExpense] = useState(false);
  const [symbolsArr] = useState(['e', 'E', '+', '-']);

  const generateID = () => Math.round(Math.random() * 10000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert('Informe a descrição e o valor!');
      return;
    } else if (amount < 1) {
      alert('O valor tem que ser positivo!');
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc(undefined);
    setAmount(undefined);
  };

  return (
    <div className="form-transactions">
      <div className="form-field">
        <label htmlFor="desc">Descrição</label>
        <InputType
          type="text"
          id="desc"
          data-testid="desc"
          className="input-primary"
          placeholder="Digite a descrição"
          value={desc || ''}
          onChange={(e: any) => setDesc(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="amount">Valor</label>
        <InputType
          type="number"
          id="amount"
          data-testid="amount"
          className="input-primary"
          placeholder="Digite o valor"
          value={amount || ''}
          min="1"
          onKeyDown={(e: any) =>
            symbolsArr.includes(e.key) && e.preventDefault()
          }
          onChange={(e: any) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-field">
        <div className="form-radio-group">
          <InputType
            type="radio"
            id="rIncome"
            nameField="group1"
            className="input-radio"
            defaultChecked
            onChange={() => setExpense(!isExpense)}
          />
          <label htmlFor="rIncome">Entrada</label>

          <InputType
            type="radio"
            id="rExpenses"
            nameField="group1"
            className="input-radio"
            onChange={() => setExpense(!isExpense)}
          />
          <label htmlFor="rExpenses">Saída</label>
        </div>
      </div>
      <div className="form-field">btn</div>
    </div>
  );
};

export default FormTransactions;
