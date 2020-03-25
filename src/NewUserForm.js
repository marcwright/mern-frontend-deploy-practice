import React from 'react';
import TextField from "@material-ui/core/TextField";

const NewUserForm = props => {
  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={props.handleSubmit}
        onChange={props.handleChange}
      >
        <TextField type="text" name="newUserName" placeholder="Name" />
        <TextField type="text" name="newUserEmail" placeholder="Email" />
        <TextField type="submit" />
      </form>
    </div>
  );
}

export default NewUserForm