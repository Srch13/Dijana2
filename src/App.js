import React, { useState } from 'react';
import axios from 'axios';
import UserForm from './components/user-form';
import UserDetail from './components/user-details';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchUser = async (userId) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setUser(response.data);
      setError(null);
    } catch (err) {
      setUser(null);
      setError('User not found');
    }
  };

  return (
    <div className="App">
      <h1>Podaci o korisniku: promjena</h1>
      <UserForm onSubmit={fetchUser} />
      {error && <p>{error}</p>}
      <UserDetail user={user} />
    </div>
  );
};

export default App;
