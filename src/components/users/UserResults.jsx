import React from 'react';
import { useEffect, useState, useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext);
  // useEffect(() => {
  //   // fetchUsers was just for testing purposes to have something in state to create UserResult/Item components
  //   fetchUsers();
  // }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
