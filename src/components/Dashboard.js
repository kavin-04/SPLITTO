import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import Balance from './Balance';
import ExpenseList from './ExpenseList';

const Dashboard = () => {
  const { users, expenses } = useAppContext();

  return (
    <div className="dashboard">
      <h2>Welcome to Splitwise</h2>
      <h3>Current Balances:</h3>
      {users.map((user) => (
        <Balance key={user.name} user={user} />
      ))}

      <h3>Expenses:</h3>
      <ExpenseList expenses={expenses} />

      <Link to="/add-expense">
        <button>Add Expense</button>
      </Link>
    </div>
  );
};

export default Dashboard;
