import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { username, age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length !== 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
