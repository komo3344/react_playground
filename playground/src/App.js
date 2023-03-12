import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoin] = useState([]);
  const [cost, setCost] = useState(1);
  const [need, setNeed] = useState(1);

  const handleChange = (event) => {
    setCost(event.target.value);
    setNeed(1);
  };
  const handleInput = (event) => {
    setNeed(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoin(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? <strong>Loading..</strong> : null}
      <select onChange={handleChange}>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}: ${coin.quotes.USD.price} USD)
          </option>
        ))}
      </select>
      <div>
        <input
          type="number"
          value={need}
          onChange={handleInput}
          placeholder="dollor"
        />
        $
      </div>
      <h2>You can get {need / cost}</h2>
    </div>
  );
}
export default App;
