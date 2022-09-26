import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import claasses from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();
  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "유요한 입력값이 아닙니다.",
        message: "이름과 나이에는 빈 값이 들어갈 수 없습니다.",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "유효한 나이 값이 아닙니다.",
        message: "나이는 0보다 커야합니다.",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={claasses.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Year)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
