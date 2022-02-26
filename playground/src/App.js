import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  // console.log(setSelected);
  // 투두리스트 연습
  // const [toDo, setToDo] = useState("");
  // const [toDoList, setToDoList] = useState([]);
  // const onChange = (event) => setToDo(event.target.value);
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   if (toDo === "") {
  //     return;
  //   }
  //   setToDo("");
  //   setToDoList((currentArray) => [toDo, ...currentArray]);
  // };

  return (
    <div>
      <h1> Coin List {loading ? "" : `(${coins.length})`}</h1>

      {/* Loading */}
      {loading ? (
        <strong>"Loading..."</strong>
      ) : (
        <form onSubmit={onSubmit}>
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        </form>
      )}
    </div>

    // 투두리스트 연습
    // <div>
    //   <h1>My To Do List ({toDoList.length})</h1>
    //   <form onSubmit={onSubmit}>
    //     <input
    //       onChange={onChange}
    //       value={toDo}
    //       type="text"
    //       placeholder="할 일을 적어주세요"
    //     />
    //     <button>Add To Do</button>
    //   </form>
    //   <hr />
    //   <ui>
    //     {toDoList.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ui>
    // </div>
  );
}

export default App;
