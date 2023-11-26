import React from 'react'
import { useState } from 'react'

export const ExpenseDisplay = ({expenseData}) => {

  return (
    <>
    <div className='expense-container'>
        <div className='expense-display'>
            <h1>Income</h1>
            
            <h3 className='income-amount'>Ghc {expenseData.income}</h3>
        </div>
        <div className='expense-display'>
            <h1>Expense</h1>
            
            <h3 className='expense-amount'>Ghc {expenseData.expense}</h3>
        </div>
    </div>
    <div className='expense-notification alert '>
        <h4>You have a litle left to spend Amos!</h4>
    </div>
    </>
  )
}
