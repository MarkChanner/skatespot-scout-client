import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Mark Channer',
      image:
        'https://assets.pernod-ricard.com/nz/media_images/test.jpg?hUV74FvXQrWUBk1P2.fBvzoBUmjZ1wct',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
