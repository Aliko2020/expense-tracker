import React from 'react'
import { useState } from 'react'

export const ExpenseDisplay = ({expenseData}) => {

  return (
    <>
    <div className='expense-container'>
        <div className='expense-display'>
            <h2>Income</h2>
            <h4 className='income-amount'>Ghc {expenseData.income}</h4>
        </div>
        <div className='expense-display'>
            <h2>Expense</h2>
            <h4 className='expense-amount'>Ghc {expenseData.expense}</h4>
        </div>
    </div>
    <div className='expense-notification alert '>
        {expenseData.expense > expenseData.income? <h4>You have spent more than you income!</h4>: <h4>no notification</h4>}
    </div>
    </>
  )
}
