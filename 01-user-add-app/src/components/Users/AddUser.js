import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import claasses from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const [enteredAge, setEnteredAge] = useState(0);
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={claasses.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username: </label>
        <input
          value={enteredUsername}
          type="text"
          id="username"
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Year)</label>
        <input
          value={enteredAge}
          type="number"
          id="age"
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
