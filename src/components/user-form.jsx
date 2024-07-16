import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <button type="submit">Dodaj korisnika</button>
    </form>
  );
};

export default UserForm;
