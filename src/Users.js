import React from 'react';
import User from './User';

const Users = props => {
  let allUsers = props.users.map(user => {
    return <User key={user._id} user={user} handleDelete={props.handleDelete} />;
  })

  return (
    <div>
      {allUsers}
    </div>
  )
}

export default Users