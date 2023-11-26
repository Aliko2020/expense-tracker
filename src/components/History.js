import React, { useState } from 'react';

export const History = ({ transactions }) => {
  return (
    <div className='history-m-container'>
      <h4>History</h4>
      <hr />
      <div className='history-container'>
        {transactions.map((transaction, index) => (
          <div className='history' key={index}>
            <p>{transaction.description}</p>
            <p>Ghc <span>{transaction.amount}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};
