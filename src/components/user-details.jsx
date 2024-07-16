import React from 'react';

const UserDetail = ({ user }) => {
  if (!user) return null;

  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Address:</strong>
      </p>
      <p>
        {user.address.street}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserDetail;
