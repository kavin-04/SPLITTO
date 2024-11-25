import React, { createContext, useState, useContext } from 'react';

// Create a Context for global state
const AppContext = createContext();

// Context Provider to manage state
export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addUsers = (names) => {
    setUsers(names.map(name => ({ name, balance: 0 })));
  };

  const addExpense = (payer, amount, participants) => {
    setExpenses([...expenses, { payer, amount, participants }]);

    // Calculate how much each person owes
    const expensePerPerson = amount / participants.length;

    const updatedUsers = users.map(user => {
      if (user.name === payer) {
        user.balance += amount;
      } else if (participants.includes(user.name)) {
        user.balance -= expensePerPerson;
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <AppContext.Provider value={{ users, expenses, addUsers, addExpense }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access the context
export const useAppContext = () => useContext(AppContext);
