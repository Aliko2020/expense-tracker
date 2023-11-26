// App component
import './App.css';
import { useEffect, useState } from 'react';
import { ExpenseDisplay } from './components/ExpenseDisplay';
import { History } from './components/History';
import { AddNewExpense } from './components/AddNewExpense';

function App() {
  // Load initial data from localStorage or use default values
  const initialExpenseData = JSON.parse(localStorage.getItem('expenseData')) || {
    income: 2000,
    expense: 0
  };

  const initialTransactions = JSON.parse(localStorage.getItem('transactions')) || [
    
  ];

  const [expenseData, setExpenseData] = useState(initialExpenseData);
  const [transactions, setTransactions] = useState(initialTransactions);

  // Save data to localStorage whenever expenseData or transactions change
  useEffect(() => {
    localStorage.setItem('expenseData', JSON.stringify(expenseData));
  }, [expenseData]);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const updateExpenseData = (newExpenseData) => {
    setExpenseData(newExpenseData);
  };

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <header>
        <h3>Expense Tracker v2</h3>
      </header>
      <ExpenseDisplay expenseData={expenseData} />
      <History transactions={transactions} />
      <AddNewExpense
        expenseData={expenseData}
        updateExpenseData={updateExpenseData}
        addTransaction={addTransaction}
      />
    </div>
  );
}

export default App;

