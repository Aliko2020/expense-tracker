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
  
    // Check if billTitle is empty
    if (formData.billTitle.trim() === "") {
      alert("Bill Title cannot be empty");
      return;
    }
  
    // Check if billAmount is empty or not a valid number
    const parsedAmount = parseInt(formData.billAmount, 10);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Bill Amount must be greater than 0");
      return;
    }
  
    // Update expenseData in the App component
    updateExpenseData({
      ...expenseData,
      expense: expenseData.expense + parsedAmount
    });
  
    // Add the new transaction to the transactions state
    addTransaction({
      description: formData.billTitle,
      amount: parsedAmount
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

