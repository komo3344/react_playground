import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDoList((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDoList);
  return (
    <div>
      <h1>My To Do List ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="blabla~"
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
