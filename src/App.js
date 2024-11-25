import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CreatePeople from './components/CreatePeople'; 
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-people" element={<CreatePeople />} /> {/* Fixed here */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-expense" element={<AddExpense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
