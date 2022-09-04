import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import claasses from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={claasses.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" />
        <label htmlFor="age">Age (Year)</label>
        <input type="text" id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
