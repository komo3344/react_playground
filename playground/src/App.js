import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState();
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("all the time");
  useEffect(() => {
    console.log("once");
  }, []);
  useEffect(() => {
    console.log("I run keyword changed.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run counter changed.");
  }, [counter]);
  useEffect(() => {
    console.log("I run counter&keyword changed.");
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here.."
      />
      <h1>{counter}</h1>
      <Button onClick={onClick} text={"button1"} />
    </div>
  );
}

export default App;
