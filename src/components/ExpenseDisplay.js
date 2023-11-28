import React, { useState } from 'react';
import { CiCircleAlert } from 'react-icons/ci';
import { IoAddSharp } from 'react-icons/io5';

export const ExpenseDisplay = ({ expenseData, updateExpenseData }) => {
  const [showIncomeForm, setShowIncomeForm] = useState(false);
  const [incomeInput, setIncomeInput] = useState('');

  const handleIncomeInputChange = (e) => {
    setIncomeInput(e.target.value);
  };

  const handleAddIncome = () => {
    // Validate the incomeInput (you can add more validation if needed)
    const parsedIncome = parseFloat(incomeInput);
    if (isNaN(parsedIncome) || parsedIncome < 0) {
      alert('Please enter a valid income amount.');
      return;
    }

    // Update the income in the parent component (App)
    updateExpenseData({
      ...expenseData,
      income: parsedIncome,
    });

    // Close the income input form
    setShowIncomeForm(false);

    // Clear the income input field
    setIncomeInput('');
  };

  return (
    <>
      <div className='expense-container'>
        <div className='expense-display'>
          <h2>Income</h2>
          <h4 className='income-amount'>Ghc {expenseData.income}</h4>
          {!expenseData.income ? <button className='add-income-btn' onClick={() => setShowIncomeForm(true)}>
            <IoAddSharp /> Add Income
          </button> : null}
        </div>
        <div className='expense-display'>
          <h2>Expense</h2>
          <h4 className='expense-amount'>Ghc {expenseData.expense}</h4>
        </div>
      </div>
      {/* Income Input Form */}
      {showIncomeForm && (
        <div className='income-form'>
          <label htmlFor='incomeInput'>Enter Monthly Income:</label>
          <input
            type='number'
            id='incomeInput'
            value={incomeInput}
            onChange={handleIncomeInputChange}
            placeholder='Enter income amount'
          />
          <button onClick={handleAddIncome}>Add</button>
          <button onClick={() => setShowIncomeForm(false)}>Cancel</button>
        </div>
        
      )}
      <div className='expense-notification alert'>
          {expenseData.expense > expenseData.income ? <p>You have spent more than your Monthly income!</p>: <p>Beware of little expenses. A small leak will sink a great ship..💸</p>}
      </div>
    </>
  );
};
