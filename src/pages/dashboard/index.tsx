import { useState, useEffect } from 'react';

import Header from '../../template/Header';
import DisplayCards from '../../components/DisplayCards/';
import FormTransactions from '../../components/FormTransactions/';
import TableTransactions from '../../components/TableTransactions/';

import './styles.css';

const Dashboard = () => {
    const dataStorage = localStorage.getItem('transactions');
    const [transactionList, setTransactionList] = useState(
        dataStorage ? JSON.parse(dataStorage) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transactionList
            .filter((item: any) => item.expense)
            .map((transaction: any) => Number(transaction.amount));

        const amountIncome = transactionList
            .filter((item: any) => !item.expense)
            .map((transaction: any) => Number(transaction.amount));

        const expenseValue = Number(amountExpense.reduce((acc: any, cur: any) => acc + cur, 0).toFixed(2));
        const incomeValue = Number(amountIncome.reduce((acc: any, cur: any) => acc + cur, 0).toFixed(2));

        const totalValue = Number((incomeValue - expenseValue).toFixed(2));

        setIncome(incomeValue);
        setExpense(expenseValue);
        setTotal(totalValue);

    }, [transactionList]);

    const handleAdd = (transaction: any) => {
        const newArrayTransactions = [...transactionList, transaction];

        setTransactionList(newArrayTransactions);

        localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
    };

    return (
        <div className="dashboard">
            <Header />
            <DisplayCards income={income} expense={expense} total={total} />
            <FormTransactions handleAdd={handleAdd} />
            {transactionList?.length > 0 ? <TableTransactions /> : <div></div>}
        </div>
    );
};

export default Dashboard;