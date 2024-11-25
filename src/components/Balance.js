import React from 'react';

const Balance = ({ user }) => {
  return (
    <div className="balance">
      <h4>{user.name}: ${user.balance.toFixed(2)}</h4>
    </div>
  );
};

export default Balance;
