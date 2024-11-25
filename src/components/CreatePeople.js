import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const CreatePeople = () => {
  const [numPeople, setNumPeople] = useState(2);
  const [names, setNames] = useState(Array(numPeople).fill(''));
  const { addUsers } = useAppContext();
  const navigate = useNavigate();

  const handleNameChange = (index, value) => {
    const updatedNames = [...names];
    updatedNames[index] = value;
    setNames(updatedNames);
  };

  const handleSubmit = () => {
    if (names.every(name => name.trim() !== '')) {
      addUsers(names);
      navigate('/add-expense');
    } else {
      alert('Please enter all names.');
    }
  };

  return (
    <div className="create-people">
      <h2>Enter Number of People</h2>
      <input
        type="number"
        value={numPeople}
        min="2"
        onChange={(e) => {
          setNumPeople(Number(e.target.value));
          setNames(Array(Number(e.target.value)).fill(''));
        }}
      />
      <h3>Enter Names:</h3>
      {Array.from({ length: numPeople }).map((_, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Person ${index + 1}`}
          value={names[index]}
          onChange={(e) => handleNameChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default CreatePeople;
