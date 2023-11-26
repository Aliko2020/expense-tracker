import React, { useState } from 'react';

export const AddNewExpense = ({expenseData, updateExpenseData,addTransaction}) => {
  

  const [formData, setFormData] = useState({
    billTitle: "",
    billAmount: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update expenseData in the App component
    updateExpenseData({
      ...expenseData,
      expense: expenseData.expense + parseInt(formData.billAmount, 10) || 0
      // Assuming billAmount is a string, convert it to an integer before adding to the expense
    });

    // Add the new transaction to the transactions state
    addTransaction({
      description: formData.billTitle,
      amount: parseInt(formData.billAmount, 10)
    });

    // Clear the form data after submission
    setFormData({
      billTitle: "",
      billAmount: ""
    });
  };
  
  return (
    <div className='add-new-container'>
      <h4>Add New Expense</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor="bill-name">Bill Name</label>
          <input
            type='text'
            placeholder='Enter Expense title'
            name="billTitle"
            value={formData.billTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className='input-container'>
          <label htmlFor="bill-amount">Bill Amount</label>
          <input
            type='number'
            placeholder='Enter amount of expense'
            name="billAmount"
            value={formData.billAmount}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className='add-btn'>Add</button>
      </form>
    </div>
  );
};

