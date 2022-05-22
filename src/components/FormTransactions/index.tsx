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
      <div className="form-fieldset">
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
      <div className="form-fieldset">
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
      <div className="form-fieldset">
        <div className="form-radio-group">
          <div className="fieldset-item">
            <InputType
              type="radio"
              id="rIncome"
              nameField="group1"
              className="input-radio"
              defaultChecked
              onChange={() => setExpense(!isExpense)}
            />
            <label htmlFor="rIncome" title="Checar como entrada">
              Entrada
            </label>
          </div>

          <div className="fieldset-item">
            <InputType
              type="radio"
              id="rExpenses"
              nameField="group1"
              className="input-radio"
              onChange={() => setExpense(!isExpense)}
            />
            <label htmlFor="rExpenses" title="Checar como saída">
              Saída
            </label>
          </div>
        </div>
      </div>
      <div className="form-fieldset">
        <Button className="btn btn--primary" text="Adicionar" />
      </div>
    </div>
  );
};

export default FormTransactions;
