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

  return (
    <div>
      <h1>My To Do List ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일을 적어주세요"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ui>
        {toDoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ui>
    </div>
  );
}

export default App;
