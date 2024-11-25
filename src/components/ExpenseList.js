import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <div key={index} className="expense">
          <p>
            {expense.payer} paid ${expense.amount.toFixed(2)} for{' '}
            {expense.participants.join(', ')}.
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;

