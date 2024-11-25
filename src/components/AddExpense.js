import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const AddExpense = () => {
  const [payer, setPayer] = useState('');
  const [amount, setAmount] = useState('');
  const [participants, setParticipants] = useState([]);
  const { users, addExpense } = useAppContext();
  const navigate = useNavigate();

  const handleCalculateExpense = () => {
    if (payer && amount && participants.length > 0) {
      addExpense(payer, parseFloat(amount), participants);
      navigate('/dashboard');
    } else {
      alert('Please enter all the details correctly.');
    }
  };

  return (
    <div className="add-expense">
      <h2>Add Expense</h2>

      <div>
        <label>Payer:</label>
        <select value={payer} onChange={(e) => setPayer(e.target.value)}>
          <option value="">Select Payer</option>
          {users.map((user) => (
            <option key={user.name} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Amount:</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div>
        <label>Participants:</label>
        {users.map((user) => (
          <div key={user.name}>
            <input
              type="checkbox"
              value={user.name}
              checked={participants.includes(user.name)}
              onChange={(e) => {
                if (e.target.checked) {
                  setParticipants([...participants, user.name]);
                } else {
                  setParticipants(participants.filter((name) => name !== user.name));
                }
              }}
            />
            <span>{user.name}</span>
          </div>
        ))}
      </div>

      <button onClick={handleCalculateExpense}>Calculate Expense</button>
    </div>
  );
};

export default AddExpense;
