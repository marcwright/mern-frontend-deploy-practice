import React from 'react';
import { Link } from "react-router-dom";

const User = props => (
  <div>
    <p><Link to={`/users/${props.user._id}`}>{props.user.name}</Link></p>
    <button id={props.user._id} onClick={props.handleDelete}>Delete {props.user.name}</button>
  </div>
);

export default User